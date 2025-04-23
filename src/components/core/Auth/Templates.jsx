import React, { useState } from 'react'
import HighlightText from '../HomePages/HighlightText'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { useSelector } from 'react-redux'
function Templates({ title, description1, description2, image, formType }) {
    const loading = useSelector((state) => state.auth)
    // const [hover, setHover] = useState(false)
    return (
        // <div></div>
        <div>

            <div className=' flex max-w-maxContent  mt-[60px]'>
                <div className=' text-white flex flex-col   justify-evenly items-center p-3'  >
                    <div className='flex flex-col justify-start w-[80%] gap-4   '>
                        <h1 className='text-2xl font-bold'>{title}</h1>
                        <p>{description1} <HighlightText style={{ fontFamily: 'cursive' }} text={description2} />  </p>
                    </div>
                    {formType === "signup" ? <SignupForm /> : <LoginForm />}
                    <div>

                    </div>
                    <div>

                    </div>

                </div>
                <div className='shadow-[12px_12px_0px] shadow-white'>
                    <img src={image} alt="" />
                </div>


            </div>






        </div>

    )
}

export default Templates
