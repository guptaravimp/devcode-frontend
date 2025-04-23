import React from 'react'
import RenderSteps from './RenderSteps'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
function AddCourse() {
    return (
        <div className='text-white mx-auto '>
            <div className='flex   text-richblack-500'><IoIosArrowBack className='text-2xl' />
                <Link to={"/dashboard"}>Back to Dashboard</Link>

            </div>
            <div className=' mx-auto flex justify-evenly gap-6 items-start  '>

                <div className='flex flex-col p-4 gap-4 mt-[-10]'>

                    <div>
                        <RenderSteps />
                    </div>
                </div>
                <div className='flex flex-col gap-4 p-8 bg-richblack-800 rounded-md border-[1px] border-richblack-600'>
                    <p className='text-2xl font-bold'>⚡Code Upload Tips</p>
                    <ul className='decoration-white  text-richblack-200 gap-20 space-y-3' >
                        <li>1.Set the Course Price option or make it free.</li>
                        <li>2.Standard size for the course thumbnail is 1024x576.</li>
                        <li>3.Video section controls the course overview video.</li>
                        <li>4.Course Builder is where you create & organize a course.</li>
                        <li>5.Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
                        <li>6.Information from the Additional Data section shows up on the course single page.</li>
                        <li>7.Make Announcements to notify any important</li>
                        <li>8.Notes to all enrolled students at once.</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default AddCourse
