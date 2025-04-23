import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPasswordResetToken } from '../services/operations/authAPI'
import { IoArrowBackSharp } from "react-icons/io5";

// getPasswordResetToken
function ForgotPassword() {
    const [emailSent, setEmailSent] = useState(false)
    const [email, setEmail] = useState("")
    const { loading } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent)) /// mail sent hone ke baad sentemail will true and ui will update to resend email 
    }
    return (
        <div className='text-white flex justify-center items-center '>
            {
                loading ? (
                    <div class="spinner"></div>
                ) : (
                    <div className='flex flex-col gap-2 justify-around items-start p-4 w-[28%] border-2 rounded-lg border-richblack-300 mt-20'>
                        <h1 className='text-3xl font-bold '>{
                            !emailSent ? "Reset Your Password" : "Check Your Email"
                        } </h1>
                        <p className='text-richblack-100'>
                            {
                                !emailSent ? " Have no fear. Well email you instructions to reset your password. If you dont have access to your email we can try account recovery" :
                                    `We have sent the reset email to ${email}`
                            }
                        </p>
                        <form onSubmit={handleOnSubmit} >
                            <div className='flex flex-col gap-2 w-full'>
                                {
                                    !emailSent && (
                                        <label >
                                            <p className='text-xl text-richblack-100'>Email Address<span style={{ color: 'red' }}>*</span></p>
                                            <input required type="email" name='email' value={email} className=' mt-2 p-4 h-12 w-[350px] rounded-md bg-richblack-800 ' style={{
                                                boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",

                                            }}
                                                onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
                                        </label>
                                    )
                                }
                                <button type='submit' className="h-12 mt-6 w-full bg-yellow-100 text-richblack-700 rounded-md">
                                    {
                                        !emailSent ? "Reset Password" : "Resend Email"
                                    }
                                </button>

                            </div>

                        </form >
                       <div>
                                                   <Link to="/login">
                                                       <p className='flex justify-start items-center gap-2 text-xl mt-2'><IoArrowBackSharp />
                                                       Back to login</p>
                                                   </Link>
                                               </div>
                    </div>
                )
            }
        </div>
    )
}

export default ForgotPassword
