import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '../../../../common/IconButton'
import { resetCourseState, setStep } from '../../../../../slices/courseSlice'
import { COURSE_STATUS } from '../../../../../utils/constants'
import { editCourseDetails } from '../../../../../services/operations/courseDetailsAPI'
function PublishForm() {
    const {register,handleSubmit,setValue,getValues}=useForm()
    const dispatch=useDispatch();
    const {course}=useSelector((state)=>state.course);
    const {token}=useSelector((state)=>state.auth);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        if(course?.status===COURSE_STATUS.PUBLISHED){
            setValue("public",true);
        }
    })
    const goBack=()=>{
           dispatch(setStep(2))
    }
    const  goToCourse=()=>{
        dispatch(resetCourseState())
        // navigate("/dashboard/my-courses")
    }
    const HandleCoursePublish=async()=>{
           if(course?.status===COURSE_STATUS.PUBLISHED && getValues("public")===true ||
           (course.status===COURSE_STATUS.DRAFT && getValues("public")===false)){
            /// no update in form 
            // no need to make at api call
            goToCourse();
            return;
           }
           const formData=new FormData();
           formData.append("courseId",course._id);
           const courseStatus=getValues("public")?COURSE_STATUS.PUBLISHED:COURSE_STATUS.DRAFT;
           formData.append("status",courseStatus)
           setLoading(true)
           const result=await editCourseDetails(formData,token);
           if(result){
            goToCourse()
           }

    }
    
    const onSubmit=()=>{
        HandleCoursePublish()

    }
         
    
  return (
    <div className='rounded-md  border-[1px] bg-richblack-800 p-6'>
        <p>Publish Course</p>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <div className='flex gap-2 justify-evenly items-center'>
            <input type="checkbox"
                id='public'
                {...register("public")} 
                className='rounded h-4 w-4'/>
                <label htmlFor="public">make this course as Publish</label>
                
            </div>
            <div>
                <button disabled={loading} type='button' onClick={goBack} className='border-2 border-white flex items-center rounded-md'> 
                    Back
                </button>
               <IconButton disabled={loading} text="save Changes"/>
            </div>
        </form>

    </div>
  )
}

export default PublishForm
