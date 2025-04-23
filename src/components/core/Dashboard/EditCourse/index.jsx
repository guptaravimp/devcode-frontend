import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Await, useParams } from 'react-router-dom'
import RenderSteps from '../AddCourse/RenderSteps'
import { getFullDetailsOfCourse } from '../../../../services/operations/courseDetailsAPI'
import { setCourse, setEditCourse } from '../../../../slices/courseSlice'

function EditCourse() {
    const dispatch=useDispatch()
    const {courseId}=useParams();
    console.log("course Id is ",courseId)
    const {course}=useSelector((state)=>state.course)
    const [loading,setLoading]=useState(false)
    const {token}=useSelector((state)=>state.auth)
    useEffect(()=>{
        const populateCourseDetails=async()=>{
            setLoading(true)
            const result=await getFullDetailsOfCourse(courseId,token);
            if(result?.courseDetails){
                dispatch(setEditCourse(true))
                dispatch(setCourse(result?.courseDetails))
            }
            setLoading(false);
        }
        populateCourseDetails()
    },[])
    if(loading){
          return <div className='spinner'>Loading</div>
    }
  return (
    <div>
         <h1>Edit Course</h1>
         <div>
            {
                course ?(<RenderSteps/>):(<p>Course Not found</p>)
            }
         </div>
    </div>
  )
}

export default EditCourse
