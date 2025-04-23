import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import HomeButton from './HomeButton'
import { FaArrowRightLong } from "react-icons/fa6";
function BecomeanInstructor() {
    return (
        <div className='flex justify-center items-center mt-[50px]'>
            <div className='w-11/12 flex flex-row gap-10  p-4'>
                <div className='flex justify-center items-center  w-[60%] p-4'>
                    <img className='shadow-white' src={Instructor} alt="" />
                </div>
                <div className='flex  justify-center items-center  w-[40%]'>
                    <div className=' flex flex-col justify-evenly items-start  gap-6 w-[80%]'>
                        <div className='text-4xl font-bold'>Become an 
                        <HighlightText text={"instructor"}/>
                        </div>
                        <div className='flex justify-center items-start'><p>Instructors from around the world teach millions of students on StudyNotion.
                             We provide the tools and skills to teach what you love.</p></div>
                        <div className='flex'>
                        <HomeButton active={true} linkto={"/signup"}>
                        <div className='flex items-center justify-center gap-2'>Start Teaching today <FaArrowRightLong/></div> </HomeButton>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BecomeanInstructor
