import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../../services/operations/authAPI'
import ForgotPassword from '../../../pages/ForgotPassword'
// import { login } from '../../../../server/controllers/Auth'
function LoginForm() {
    const [formdata, setformdata] = useState({ email: "", password: "" })
    const [showPassword, setShowPassword] = useState(false)
    const [hover, setHover] = useState(false)

    const { email, password } = formdata;
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const handleOnChange = (e) => {
        setformdata((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }
    const handleOnSubmit=(e)=>{
        e.preventDefault()
        dispatch(login(email,password,navigate))  // that is inside service operation that communicate with our backend 
    }
    return (

        <div className='w-[80%] font-inter hover:bg-richblack-900' >
            <form onSubmit={handleOnSubmit}>

                <label className='w-full gap-3 flex flex-col mt-8'>
                    <p className='text-md text-white' >
                        Email Address
                    </p>
                    <input type="text"
                        style={{
                            boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                        }} className='h-10 w-full bottom-1 rounded bg-richblack-800 p-[12px] text-richblack-5'
                        required name='email' value={email} onChange={handleOnChange} placeholder='Enter email Address' />
                </label>

                <label className='relative w-full gap-3 flex flex-col mt-8'>
                    <p className=' text-md text-white'>
                        Password
                    </p>
                    <input type={showPassword ? "text" : "password"}
                        style={{
                            boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                        }} className='h-10 w-full bottom-1 rounded bg-richblack-800 p-[12px] text-richblack-5'
                        required name='password' value={password} onChange={handleOnChange} placeholder='Enter Your Password' />



                    <span
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-[50px] z-[10] cursor-pointer border-6 border-white"
                    >
                        {showPassword ? (
                            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                        ) : (
                            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                        )}
                    </span>

                    <Link to="/forgot-password">
                        <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
                            Forgot Password
                        </p>
                    </Link>
                </label>
                <button
                    type="submit"
                    className="mt-6 w-full bg-yellow-50 p-3 font-medium text-richblack-900 rounded-[8px]"
                >
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default LoginForm
