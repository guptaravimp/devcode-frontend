// import toast from "react-hot-toast"
// import { apiconnector } from "../apiconnector"
// import { contactusEndpoint, endpoints } from "../apis"
// import { setLoading, setToken } from "../../slices/authSlice"

// const {
//     CONTACT_US_API,
// } = contactusEndpoint;



// export function submitContactUs(data) {
//     // const navigate=useNavigate()
//     return async (dispatch) => {
//         dispatch(setLoading(true));
//         try {
//             const response = await apiconnector("POST", CONTACT_US_API, {
//                 data,
//             })
//             // const response={status:"OK"}
//             toast.success("Message sent successfully!");
//             dispatch(setToken(response.data.token))
//             console.log("CONTACT US RESPONSE:", response);
//             // navigate("/");
//         } catch (error) {
//             console.log("Error occurred:", error);
//             toast.error("Failed to send message.");
//         } finally {
//             dispatch(setLoading(false));
//         }
//     };


// }

import toast from "react-hot-toast"
// import { apiconnector } from "../apiconnector"
import { contactusEndpoint } from "../apis"
// import { setLoading } from "../../slices/authSlice"
// setLoading
import { useSelector } from "react-redux";
import { setLoading } from "../../slices/authSlice";
import { apiconnector } from "../apiConnector";

const {
    CONTACT_US_API,
} = contactusEndpoint;

export function submitContactUs(data) {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            console.log("datat" ,data)
            // const response = await apiconnector("POST", CONTACT_US_API, data,{
            //     Authorization: `Bearer ${token}`,
            // });
            const response={status:"OK"}
            toast.success("Message sent successfully!");
            console.log("CONTACT US RESPONSE:", response,data);
        } catch (error) {
            console.log("Error occurred:", error);
            toast.error("Failed to send message.");
        } finally {
            dispatch(setLoading(false));
        }
    };
}
