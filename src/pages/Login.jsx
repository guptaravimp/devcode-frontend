import React, { useState } from 'react'
import loginimg from "../assets/Images/login.webp"
import Templates from '../components/core/Auth/Templates'
import { useSelector } from 'react-redux'
function Login() {
    const { loading } = useSelector((state) => state.auth)
    

    return (
        <div className='w-screen  border-2  flex justify-center items-center' >
            {
                loading ? (<div className="spinner"></div>) : (<Templates

                    title="Welcome Back"
                    description1="Build skills for today, tomorrow, and beyond."
                    description2="Education to future-proof your career."
                    image={loginimg}
                    formType="login"

                />)
            }
        </div>

    )
}

export default Login
