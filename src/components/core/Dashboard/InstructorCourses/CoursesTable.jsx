import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { COURSE_STATUS } from '../../../../utils/constants';
import ConfirmationModal from '../../../common/ConfirmationModal';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { RiDeleteBin6Line } from "react-icons/ri"
import { MdPublishedWithChanges } from "react-icons/md";

import { RiDraftFill } from "react-icons/ri";


import { FaEdit } from "react-icons/fa";

// import { setLoading } from '../../../../slices/authSlice';
import { deleteCourse, fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI';
import { useNavigate } from 'react-router-dom';
function CoursesTable({ courses, setCourses }) {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(false);
    const [confirmationModal, setConfirmationModal] = useState(null)
    const navigate = useNavigate()

    const handleCourseDelete = async (courseId) => {
        setLoading(true)
        console.log("mai cal;l kiya gaya hu ")
        await deleteCourse({ courseId: courseId }, token)
        const result = await fetchInstructorCourses(token)
        if (result) {
            setCourses(result)
        }
        setConfirmationModal(null)
        setLoading(false)
    }
    return (
        <div className=''>
            <div className='mx-auto flex  p-8'>


                <Table className=''>
                    <Thead>
                        <Tr className='flex justify-evenly gap-12 items-center w-full p-4'>
                            <Th className='opacity-0'> Course Thumbnail </Th>
                            <Th>Course</Th>
                            <Th>Duration</Th>
                            <Th>Price</Th>
                            <Th>Actions</Th>

                        </Tr>
                    </Thead>
                    <Tbody className='gap-10'>
                        {
                            courses.length === 0 ? (
                                <Tr>
                                    <Td>No Data</Td>

                                </Tr>

                            ) : (
                                courses.map((course) => (
                                    <Tr className='border-[1px] mt-4 rounded-xl bg-[#161D29] border-richblack-600 flex justify-between p-4'>
                                        <Td className='flex justify-evenly items-start gap-x-4 gap-y-6'>
                                            <img src={course?.thumbnail} className='h-[150px] w-[220px] border-[1px] border-richblack-600 rounded-lg object-cover' alt="" />
                                            <div className='flex flex-col'>
                                                <p className='text-xl'>{course.courseName}</p>
                                                <p>{course.courseDescription}</p>
                                                <p className='text-yellow-300'>Created :</p>
                                                {
                                                    course.status === COURSE_STATUS.DRAFT
                                                        ? <p className='text-pink-400 flex justify-around mt-1   items-center '><RiDraftFill />
 DRAFTED</p>
                                                        : <p className='text-yellow-300 flex justify-around mt-1   items-center '><MdPublishedWithChanges />
PUBLISHED</p>
                                                }
                                            </div>
                                        </Td>
                                        <Td>2hr 30 min</Td>
                                        <Td>{course.price}</Td>
                                        <Td className='flex  gap-2 justify-evenly items-start '>
                                            <button className='flex justify-center items-center gap-2 bg-yellow-100 rounded-xl h-[40px] w-[90px] text-richblack-800' disabled={loading} onClick={() => {
                                                navigate(`/dashboard/edit-course/${course._id}`)
                                            }} ><FaEdit />
 Edit</button>
                                            <button
                                                className='flex justify-center items-center gap-2 bg-yellow-100 rounded-xl h-[40px] w-[90px] text-richblack-800'

                                                disabled={loading}


                                                onClick={() => {
                                                    setConfirmationModal({
                                                        text1: "Do you want to delete this course?",
                                                        text2:
                                                            "All the data related to this course will be deleted",
                                                        btn1Text: !loading ? "Delete" : "Loading...  ",
                                                        btn2Text: "Cancel",
                                                        btn1Handler: !loading
                                                            ? () => handleCourseDelete(course._id)
                                                            : () => { },
                                                        btn2Handler: !loading
                                                            ? () => setConfirmationModal(null)
                                                            : () => { },

                                                    })
                                                    className = "px-1 border-2  border-white transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
                                                    console.log("mai delte ke liye click kiya hu ")
                                                }}
                                            >
                                                <RiDeleteBin6Line size={20} /><span>Delete</span>
                                            </button>
                                        </Td>
                                    </Tr>

                                ))
                            )


                        }
                    </Tbody>

                </Table>


                {

                    confirmationModal && <ConfirmationModal modalData={confirmationModal} />}


            </div>


        </div>

    )
}

export default CoursesTable
