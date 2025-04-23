import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchInstructorCourses } from '../../../services/operations/courseDetailsAPI'
import CoursesTable from './InstructorCourses/CoursesTable'

import { IoMdAddCircleOutline } from "react-icons/io";

function MyCourses() {
    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const result = await fetchInstructorCourses(token);
            console.log("reult le lo ", result)
            if (result) {

                setCourses(result);
            }
        }
        fetchCourses()
    }, [])
    return (
        <div className='mx-auto  w-full  text-white p-8'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl  font-bold'>My Courses</h1>
                {/* <IconButton text="" customClasses={"w-[200px]"}  /> */}
                    <button className='bg-yellow-100 lg:w-[180px] lg:h-[40px] rounded-xl text-xl  p-4 flex justify-evenly items-center text-richblack-900' onClick={() => navigate("/dashboard/add-course")}><IoMdAddCircleOutline className='text-xl' />
                    Add Courses</button>
            </div>

            {
                courses && <CoursesTable courses={courses} setCourses={setCourses} />
            }
        </div>
    )
}

export default MyCourses
