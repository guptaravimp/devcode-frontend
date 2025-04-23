import {toast} from "react-hot-toast";
import { apiconnector } from "../apiConnector";
import rzpLogo from "../../assets/Logo/rzp_logo.png"
import { resetCart } from "../../slices/cartSlice";
import { studentEndpoints } from "../apis";
const { 
    COURSE_PAYMENT_API,
    COURSE_VERIFY_API,
    SEND_PAYMENT_SUCCESS_EMAIL_API }
    = studentEndpoints;



{/* <script src="https://checkout.razorpay.com/v1/checkout.js"></script> */ }
function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        }
        script.onerror = () => {
            resolve(false);
        }
        document.body.appendChild(script);
    })
}


export async function buyCourse(token, courses, userDetails, navigate, dispatch) {
    
    const toastId = toast.loading("loading....")
    // console.log("token is ",navigate)
    try {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        
        if (!res) {
            toast.error("razorpay SDK failed to load")
            return;
        }
        

        /// order initializing 
        const orderResponse = await apiconnector("POST", COURSE_PAYMENT_API, { courses }, {
            Authorization: `Bearer ${token}`
        })
        console.log("ha sab theekyaha ")

        if (!orderResponse.data.success) {
            throw new Error(orderResponse.data.message);
        }
        console.log("order resp[onse id ",orderResponse)
        //options obj createion
        console.log("RAZORPAY KEY:", import.meta.env.VITE_RAZORPAY_KEY);

        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY,
            currency: orderResponse.data.message.currency,
            amount: `${orderResponse.data.message.amount}`,
            order_id: orderResponse.data.message.id,
            name: "<devcode/>",
            description: "Thank You for Puchasing the Course",
            image: rzpLogo,
            prefill: {
                name: `${userDetails.firstName}`,
                email: userDetails.email,
            },
            handler: function (response) {
                // send successfull email 
                sendPaymentSuccessEmail(response, orderResponse.data.message.amount,token);


                // payment verification 
                verifyPayment({ ...response, courses }, token, navigate, dispatch)
            }
        }
        /// opening the razorpay payment modal
        const paymentObject=new window.Razorpay(options);
        paymentObject.open()
        paymentObject.on("payment.failed", function (response) {
            toast.error("Oops! Payment failed");
            console.log(response.error);
        });
        

    } catch (error) {
        console.log("Payment has some errror ", error)
        toast.error("Could not  make payment")
    }
    toast.dismiss(toastId);
}




async function sendPaymentSuccessEmail(response,amount,token){
    try{
        await apiconnector("POST", SEND_PAYMENT_SUCCESS_EMAIL_API,{
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            amount:amount
        },{
            Authorization:`Bearer ${token}`
        })

    }catch(error){
        console.log("Payment success email error",error)

    }
}



/// verify payment 
async function verifyPayment(bodyData,token,navigate,dispatch){
    const toastId=toast.loading("verifying Payment .....")
    // dispatch(setpaymentLoading(true))
    try{
        const response=await apiconnector("POST",COURSE_VERIFY_API, bodyData,{
            Authorization:`Bearer ${token}`,
        })
       console.log("response of verify payment ius ",response)
        if(!response.data.success){
            throw new Error(response.data.message);
        }
        console.log("VERIFY PAYMENT RESPONSE ",response)
        toast.success('payment successfully , ypu are added to the course ');
        navigate("/dashboard/enrolled-courses");
        dispatch(resetCart());
    }catch(error){
        console.log("Payment verify error.... ",error)
        toast.error("Could not verify Payment")
    }
    toast.dismiss(toastId)
    // dispatch(setpaymentLoading(false));
}