import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OtpInput from 'react-otp-input';
import { sendOtp, signUp } from '../services/operations/authAPI';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";

function VerifyEmail() {
    const [otp, setotp] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { signupData, loading } = useSelector((state) => state.auth) //from redux slice these data is comming 

    /// let we dont find data in signupData first render pr signup pr bhej do 
    useEffect(() => {
        if (!signupData) {
            navigate("/signup")
        }
    }, [signupData, navigate])


    const {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,

    } = signupData;
    const handleOnSubmit = (e) => {
        e.preventDefault();

        dispatch(signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate)) // dispatch signup action with otp 
    }
    return (
        <div className='text-white  mt-[120px] flex flex-col justify-around items-center '>
            {
                loading ? (
                    <div class="spinner"></div>
                ) : (
                    <div className=' mt-1 flex flex-col gap-3  p-3 justify-evenly items-start  '>
                        <h1 className='font-bold text-3xl'>Verify Your Email</h1>
                        <p>A verification code has been sent to you. Enter the code below</p>
                        <form onSubmit={handleOnSubmit}>
                        <OtpInput
                    value={otp}
                    onChange={setotp}
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    inputStyle="w-10 h-12 p-2 bg-richblack-800 text-white rounded-[8px] border-[1px] border-richblack-500 text-[2.5rem] text-center p-2"
                    focusStyle="border-[5px] border-red-500"
                    isInputNum={true}
                    shouldAutoFocus={true}
                    containerStyle="flex justify-between gap-4"
                    renderInput={(props) => <input {...props} />}

                    />
                            
                            

                            <button type='submit' className='mt-4 h-12 text-richblack-800 text-xl font-bold  rounded-xl  bg-yellow-200 w-full'> Verify Email</button>
                        </form>



                        <div className='w-full  flex justify-between items-center'>
                            <Link to="/login">
                                <p className='flex text-richblack-100 font-bold  justify-start items-center gap-2 text-xl mt-2'><IoArrowBackSharp />
                                    Back to login</p>
                            </Link>
                            <button className='flex justify-evenly gap-1 items-center text-xl text-richblack-100' onClick={() => dispatch(sendOtp(signupData.email))}>
                                {/* /// resend it to back send otp that is present in operation authapi.js where it communicate with backend   */}
                                <VscDebugRestart className='text-richblue-5' />
 Resend it
                            </button>


                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default VerifyEmail
