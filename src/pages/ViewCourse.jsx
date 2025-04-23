import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { getFullDetailsOfCourse } from '../services/operations/courseDetailsAPI';
import { setCompletedLectures, setCourseSectionData, setEntireCourseData, setTotalNoOfLectures } from '../slices/viewCourseSlice';
import VideoDetailsSidebar from '../components/core/ViewCourses/VideoDetailsSidebar';
import CourseReviewModal from '../components/core/ViewCourses/CourseReviewModal';

function ViewCourse() {
    const [reviewModal, setReviewModal] = useState();
    const {courseId}=useParams();
    const {token}=useSelector((state)=>state.auth)
    const dispatch=useDispatch();


    useEffect(()=>{
        const setCourseSpecificDetails=async()=>{
             const courseData=await getFullDetailsOfCourse(courseId,token)
             dispatch(setCourseSectionData(courseData.courseDetails.courseContent));
             dispatch(setEntireCourseData(courseData.courseDetails))
             dispatch(setCompletedLectures(courseData.completedVideos))
             let lecture=0;
             courseData?.courseDetails?.courseContent?.forEach((sec)=>{
                lecture+=sec.subSection.length
             })
             dispatch(setTotalNoOfLectures(lecture))
        }
     },[])


    return (
        <>
            <div className='mx-auto  relative flex justify-between w-full text-white h-[calc(100vh-3.5rem)]   '>
                <VideoDetailsSidebar setReviewModal={setReviewModal} />
                <div className=' h-[calc(100vh-3.5rem)] lg:w-[90%] ml-1 overflow-auto'>
                    <div className='mx-auto w-12/12 max-w-[1000px] py-10 '>
                        <Outlet />
                    </div>
                </div>
            </div>

            {
                reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />
            }


        </>
    )
}

export default ViewCourse
