import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { resetPassword } from '../services/operations/authAPI';
import { IoArrowBackSharp } from "react-icons/io5";

function UpdatePassword() {
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    })
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmPassword] = useState(false);
    const { loading } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const location = useLocation()
    const { password, confirmPassword } = formData;
    const handleOnChange = (e) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value,
            }
        ))
    }
    const handleOnSubmit = (e) => {
        e.preventDefault(); // ✅ Corrected typo
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password, confirmPassword, token));
    };
    // // this is calling from operation auth that communicate with backend and send response to dispatch to update the ui and fullfill aur api request response


    return (
        <div className='text-white w-screen  h-screen flex justify-evenly  items-center  '>
            {
                loading ? (
                    <div class="spinner"></div>
                ) : (
                    <div className='relative flex flex-col justify-evenly p-6 gap-4 items-start rounded-xl border-2 border-richblack-400  w-[26%] max-h-max]'>
                        <h1 className=' font-bold text-3xl'>Choose new Password</h1>
                        <p>Almost done. Enter your new password and youre all set.</p>
                        <form onSubmit={handleOnSubmit} className='gap-6'>
                            <label >
                                <p className=''>New Password<span style={{ color: 'red' }}>*</span></p>


                                
                                <input required type={showPassword ? "text" : 'password'}
                                   style={{
                                    boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                                }} 

                                    name='password'
                                    value={password}
                                    onChange={handleOnChange}
                                    placeholder='Password'
                                    className='h-10 p-3 w-[350px] text-md bottom-1 mt-2 rounded bg-richblack-800  text-richblack-5'
                                />
                                <span  className="absolute  right-[40px] top-[178px] z-[10] cursor-pointer border-6 border-white"
                                    onClick={() => setShowPassword((prev) => !prev)}

                                >
                                    {showPassword ? (
                                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                    ) : (
                                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                    )}
                                </span>
                            </label>
                            <label >
                                <p className='mt-4'>Confirm New Passowrds<span style={{ color: 'red' }}>*</span></p>
                                <input required type={showConfirmPassword ? "text" : 'password'}

                                    name='confirmPassword'
                                    value={confirmPassword}
                                    onChange={handleOnChange}
                                    placeholder='Confirm Password'
                                      className='relative h-10 w-[350px] bottom-1 mt-2 p-3 rounded bg-richblack-800  text-richblack-5'
                                />
                                <span
                                    onClick={() => setConfirmPassword((prev) => !prev)}
                                    className="absolute right-[40px] top-[262px] z-[10] cursor-pointer "

                                >
                                    {showConfirmPassword ? (
                                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                    ) : (
                                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                    )}
                                </span>
                            </label>
                            <button className="h-12 mt-6 w-full bg-yellow-100 text-richblack-700 rounded-md" type='submit'>Reset Password</button>
                             
                        </form>
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

export default UpdatePassword
