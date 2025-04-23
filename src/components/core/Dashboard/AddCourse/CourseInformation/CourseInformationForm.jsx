// import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { useDispatch, useSelector } from 'react-redux';
// import { addCourseDetails, editCourseDetails, fetchCourseCategories } from '../../../../../services/operations/courseDetailsAPI';
// import { HiOutlineCurrencyRupee } from "react-icons/hi2";
// import RequiredField from './RequiredField';
// import IconButton from '../../../../common/IconButton';
// import { setCourse, setEditCourse, setStep } from '../../../../../slices/courseSlice';
// import Upload from './Upload';
// import ChipInput from './ChipInput';
// import { COURSE_STATUS } from '../../../../../utils/constants';
// // editCourseDetails
// function CourseInformationForm() {
//     const {
//         register,
//         handleSubmit,
//         setValue,
//         getValues,
//         formState:{errors},
//     } = useForm();


//     const dispatch = useDispatch();
//     // const {token} = useSelector((state)=>state.auth);
//     const token=useSelector((state)=>state.auth?.token);
//     const { course, editCourse } = useSelector((state) => state.course);
//     const [loading, setLoading] = useState(false);
//     const [courseCategories, setCourseCategories] = useState([]);
//     console.log("token is tot found",token)
//     useEffect(() => {
//         const getCategories = async () => {
//             setLoading(true);
//             const categories = await fetchCourseCategories();
//             if (categories.length > 0) {
//             setCourseCategories(categories);
//             }
//             setLoading(false);
//         }
//          if(editCourse){
//             setValue("courseTitle",course.courseName)
//             setValue("courseShortDesc",course.courseDescription)
//             setValue("coursePrice",course.price)
//             setValue("courseTags",course.tags)
//             setValue("courseBenefits",course.whatYouWillLearn)
//             setValue("courseCategory",course.category)
//             setValue("courseRequirements",course.instructions)
//             setValue("courseImage",course.thumbnail)

//          }
//         getCategories();
//     },[])

//     const isFormUpdated = () => {
//         const currentValues = getValues();
//         if(currentValues.courseTitle !== course.courseName ||
//             currentValues.courseShortDesc !== course.courseDescription ||
//             currentValues.coursePrice !== course.price ||
//             currentValues.courseTitle !== course.courseName ||
//             currentValues.courseTags.toString() !== course.tag.toString() ||
//             currentValues.courseBenefits !== course.whatYouWillLearn ||
//             currentValues.courseCategory._id !== course.category._id ||
//             currentValues.courseImage !== course.thumbnail ||
//             currentValues.courseRequirements.toString() !== course.instructions.toString() )
//             return true;
//         else
//             return false;
//     }

//     // handle next button 
//     const onSubmit=async(data)=>{
//         if(editCourse) {
//             if(isFormUpdated()) {
//                 const currentValues = getValues();
//             const formData = new FormData();

//             formData.append("courseId", course._id);
//             if(currentValues.courseTitle !== course.courseName) {
//                 formData.append("courseName", data.courseTitle);
//             }

//             if(currentValues.courseShortDesc !== course.courseDescription) {
//                 formData.append("courseDescription", data.courseShortDesc);
//             }

//             if(currentValues.coursePrice !== course.price) {
//                 formData.append("price", data.coursePrice);
//             }

//             if(currentValues.courseBenefits !== course.whatYouWillLearn) {
//                 formData.append("whatYouWillLearn", data.courseBenefits);
//             }

//             if(currentValues.courseCategory._id !== course.category._id) {
//                 formData.append("category", data.courseCategory);
//             }

//             if(currentValues.courseRequirements.toString() !== course.instructions.toString()) {
//                 formData.append("instructions", JSON.stringify(data.courseRequirements));
//             }

//             setLoading(true);
//             const result = await editCourseDetails(formData, token);
//             setLoading(false);
//             if(result) {
//                 dispatch(setEditCourse(false));
//                 dispatch(setStep(2));
//                 dispatch(setCourse(result));
//             }
//             } 
//             else {
//                 toast.error("NO Changes made so far");
//             }
//             console.log("PRINTING FORMDATA", formData);
//             console.log("PRINTING result", result);

//             return;
//         }

//         //create a new course
//         const formData = new FormData();
//         formData.append("courseName", data.courseTitle);
//         formData.append("courseDescription", data.courseShortDesc);
//         formData.append("price", data.coursePrice);
//         formData.append("whatYouWillLearn", data.courseBenefits);
//         formData.append("category", data.courseCategory);
//         formData.append("instructions", JSON.stringify(data.courseRequirements));
//         formData.append("status", COURSE_STATUS.DRAFT);
//         formData.append("tag", JSON.stringify(data.courseTags));
//         formData.append("thumbnailImage", data.courseImage);

//         setLoading(true);
//         console.log("BEFORE add course API call");
//         console.log("PRINTING FORMDATA", formData);
//         const result = await addCourseDetails(formData,token);
//         if(result) {
//             dispatch(setStep(2));
//             dispatch(setCourse(result));
//         }
//         setLoading(false);
//         console.log("after add course api call");
//         console.log("PRINTING FORMDATA", [...formData]);
//         console.log("PRINTING result", result);
//     }










//     return (
//        <form onSubmit={handleSubmit(onSubmit)} className='mx-auto rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-3'>
//             <div className='mx-auto w-[80%]'>
//                 <label htmlFor="courseTitle">Course Title <sup>*</sup></label>
//                 <input type="text" id="courseTitle" placeholder='Enter Course title'
//                 {...register("courseTitle",{required:true})}
//                 className='w-full'/>
//                 {
//                     errors.courseTitle&&(
//                         <span>Course Title is required</span>
//                     )
//                 }
//             </div>
//             <div  className='mx-auto w-[80%]'>

//                 <label htmlFor="courseShortDesc"> Course Short Description<sup>*</sup></label>
//                 <textarea name="" placeholder="Enter Your Short description " className='w-full' {...register("courseShortDesc",{required:true})} id="courseShortDesc"></textarea>
//                 {
//                     errors.courseShortDesc &&(
//                         <span>Course Short Description is required</span>
//                     )
//                 }
//             </div>
//             <div className='mx-auto w-[80%] relative'>
//                 <label htmlFor="coursePrice">Course Price <sup>*</sup></label>
//                 <input type="text" id="coursePrice" placeholder='Enter Course Price'
               
//                 {...register("coursePrice", {valueAsNumber:true, required:true})}
//                 className='w-full'/>
//                 <HiOutlineCurrencyRupee className='absolute top-6 text-richblack-800 text-xl'/>

//                 {
//                     errors.coursePrice &&(
//                         <span>Course Price is Required</span>
//                     )
//                 }
//             </div>

//             <div className='mx-auto w-[80%] relative'>
//                 <label htmlFor="courseCategory">Course category  <sup>*</sup></label>
//                  <select name="" className='text-black'   id="courseCategory" defaultValue="" 
//                  {...register("courseCategory",{required:true})}>
//                     <option value="">Choose category</option>
//                     {/* <option value="">{courseCategories[0]?.name}</option> */}
//                     {
//                         !loading && courseCategories.map((category)=>{
//                             return <option  value={category._id}>
//                                 {category.name}
//                             </option>
//                         })
//                     }
//                  </select>
//                 {
//                     errors.coursePrice &&(
//                         <span>Course Category is Required</span>
//                     )
//                 }
//             </div>



//             {/* /// create a custom components  */}
//             <ChipInput
//                label="Tags"
//                name="courseTags"
//                placeholder="Enter tags and press enter"
//                register={register}
//                errors={errors}
//                setValue={setValue}
//                getValues = {getValues}
//             />



//            <Upload
//             name={"courseImage"}
//             label={"CourseImage"}
//             register={register}
//             errors={errors}
//             setValue={setValue}
//             />

//          {/* Benefits of the course  */}
//          <div>
//             <label htmlFor="">Benefits of the course</label>
//             <textarea name="courseBenefits"
//             placeholder='Enter the benefits for the course '
//             {...register("courseBenefits",{required:true})}
//              id="courseBenefits"></textarea>
//              {
//                     errors.coursePrice &&(
//                         <span>Course Benefits is Required</span>
//                     )
//                 }
//          </div>
       

//        <RequiredField
//        name="courseRequirements"
//        label="Requirements/Instructions"
//        register={register}
//        errors={errors}
//        setValue={setValue}
//        getValues={getValues}
//        />

//        <div>
//         {
//             editCourse && (
//                 <button
//                 onClick={()=>dispatch(setStep(2))}
//                 className='flex items-center'>
//                     Continue without save 
//                 </button>
//             )
//         }
//         <IconButton text={!editCourse ?"next":"Save Changes"}  />
//        </div>



//        </form>
//     )
// }

// export default CourseInformationForm








import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { addCourseDetails, editCourseDetails, fetchCourseCategories } from '.././../../../../services/operations/courseDetailsAPI';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import RequirementField from '../CourseInformation/RequiredField';

import { setStep, setCourse, setEditCourse} from '../../../../../slices/courseSlice';
import IconButton from '../../../../common/IconButton';

import { COURSE_STATUS } from '../../../../../utils/constants';
import { toast } from 'react-hot-toast';
import Upload from './Upload'
import ChipInput from './ChipInput';

const CourseInformationForm = () => {

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState:{errors},
    } = useForm();

    const dispatch = useDispatch();
    const {token} = useSelector((state)=>state.auth);
    const {course, editCourse} = useSelector((state)=>state.course);
    const [loading, setLoading] = useState(false);
    const [courseCategories, setCourseCategories] = useState([]);

    useEffect(()=> {
        const getCategories = async() => {
            setLoading(true);
            const categories = await fetchCourseCategories();
            if(categories.length > 0) {
                setCourseCategories(categories);
            }
            setLoading(false);
        }

        if(editCourse) {
            setValue("courseTitle", course.courseName);
            setValue("courseShortDesc", course.courseDescription);
            setValue("coursePrice", course.price);
            setValue("courseTags", course.tag);
            setValue("courseBenefits", course.whatYouWillLearn);
            setValue("courseCategory", course.category);
            setValue("courseRequirements", course.instructions);
            setValue("courseImage", course.thumbnail);
        }

        getCategories();
    },[])

    const isFormUpdated = () => {
        const currentValues = getValues();
        if(currentValues.courseTitle !== course.courseName ||
            currentValues.courseShortDesc !== course.courseDescription ||
            currentValues.coursePrice !== course.price ||
            currentValues.courseTitle !== course.courseName ||
            currentValues.courseTags.toString() !== course.tag.toString() ||
            currentValues.courseBenefits !== course.whatYouWillLearn ||
            currentValues.courseCategory._id !== course.category._id ||
            currentValues.courseImage !== course.thumbnail ||
            currentValues.courseRequirements.toString() !== course.instructions.toString() )
            return true;
        else
            return false;
    }

    //handles next button click 
    const onSubmit = async(data) => {

        if(editCourse) {
            if(isFormUpdated()) {
                const currentValues = getValues();
            const formData = new FormData();

            formData.append("courseId", course._id);
            if(currentValues.courseTitle !== course.courseName) {
                formData.append("courseName", data.courseTitle);
            }

            if(currentValues.courseShortDesc !== course.courseDescription) {
                formData.append("courseDescription", data.courseShortDesc);
            }

            if(currentValues.coursePrice !== course.price) {
                formData.append("price", data.coursePrice);
            }

            if(currentValues.courseBenefits !== course.whatYouWillLearn) {
                formData.append("whatYouWillLearn", data.courseBenefits);
            }

            if(currentValues.courseCategory._id !== course.category._id) {
                formData.append("category", data.courseCategory);
            }

            if(currentValues.courseRequirements.toString() !== course.instructions.toString()) {
                formData.append("instructions", JSON.stringify(data.courseRequirements));
            }

            setLoading(true);
            const result = await editCourseDetails(formData, token);
            setLoading(false);
            if(result) {
                dispatch(setEditCourse(false));
                dispatch(setStep(2));
                dispatch(setCourse(result));
            }
            } 
            else {
                toast.error("NO Changes made so far");
            }
            console.log("PRINTING FORMDATA", formData);
            console.log("PRINTING result", result);

            return;
        }

        //create a new course
        const formData = new FormData();
        formData.append("courseName", data.courseTitle);
        formData.append("courseDescription", data.courseShortDesc);
        formData.append("price", data.coursePrice);
        formData.append("whatYouWillLearn", data.courseBenefits);
        formData.append("category", data.courseCategory);
        formData.append("instructions", JSON.stringify(data.courseRequirements));
        formData.append("status", COURSE_STATUS.DRAFT);
        formData.append("tag", JSON.stringify(data.courseTags));
        formData.append("thumbnailImage", data.courseImage);

        setLoading(true);
        console.log("BEFORE add course API call");
        console.log("PRINTING FORMDATA", formData);
        const result = await addCourseDetails(formData,token);
        if(result) {
            dispatch(setStep(2));
            dispatch(setCourse(result));
        }
        setLoading(false);
        console.log("AFTER add course API call");
        console.log("PRINTING FORMDATA", [...formData]);
        console.log("PRINTING result", result);

    }

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className='space-y-8 rounded-md border-[1px] w-[100%] border-richblack-700 bg-richblack-800 p-6'
    >
        <div className='flex flex-col space-y-2'>
            <label className='text-sm text-richblack-5'  htmlFor='courseTitle'>Course Title<sup className='text-pink-200'>*</sup></label>
            <input
                id='courseTitle'
                placeholder='Enter Course Title'    style={{
                            boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                        }} 
                {...register("courseTitle", {required:true})}
                className='form-style  h-10 w-full bottom-1 rounded bg-richblack-600 p-[12px] text-richblack-5'
            />
            {
                errors.courseTitle && (
                    <span className='ml-2 text-xs tracking-wide text-pink-200'>Course Title is Required**</span>
                )
            }
        </div>

        <div className='flex flex-col space-y-2'>
            <label className='text-sm text-richblack-5'  htmlFor='courseShortDesc'>Course Short Description<sup className='text-pink-200'>*</sup></label>
            <textarea
                id='courseShortDesc'
                placeholder='Enter Description'   style={{
                            boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                        }} 
                {...register("courseShortDesc", {required:true})}
                className='form-style lg:h-10 w-full bottom-1 rounded bg-richblack-600 p-[12px] text-richblack-5'
                />
            {
                errors.courseShortDesc && (<span className='ml-2 text-xs tracking-wide text-pink-200'>
                    Course Description is required**
                </span>)
            }
        </div>

        <div className='relative flex flex-col space-y-2'>
            <label className='text-sm text-richblack-5' htmlFor='coursePrice'>Course Price<sup className='text-pink-200'>*</sup></label>
            <input
                id='coursePrice'
                placeholder='Enter Course Price'   style={{
                            boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                        }} 
                {...register("coursePrice", {
                    required:true,
                    valueAsNumber:true
                })}
                className='form-style lg:h-10 w-full bottom-1 flex justify-center text-center  rounded bg-richblack-600 p-[12px] text-richblack-5'
            />
            <HiOutlineCurrencyRupee size={30}  className='absolute top-6 text-pink-200 '/>
            {
                errors.coursePrice && (
                    <span className='ml-2 text-xs tracking-wide text-pink-200'>Course Price is Required**</span>
                )
            }
        </div>

        <div className='flex flex-col space-y-2'>
            <label className='text-sm text-richblack-5' htmlFor='courseCategory'>Course Category<sup className='text-pink-200'>*</sup></label>
            <select disabled={editCourse}   style={{
                            boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                        }}  className='form-style lg:h-10 w-full bottom-1 rounded bg-richblack-600 p-[12px] text-richblack-5'
            id='courseCategory'
            defaultValue=""
            {...register("courseCategory", {required:true})}
            >
                <option value="" className='' disabled>Choose a Category</option>

                {
                    !loading && courseCategories.map((category, index) => (
                        <option key={index} value={category?._id}>
                            {category?.name}
                        </option>
                    ))
                }

            </select>
            {errors.courseCategory && (
                <span className='ml-2 text-xs tracking-wide text-pink-200'>
                    Course Category is Required
                </span>
            )}
        </div>

        {/* custom component for handling tags input */}
        <ChipInput
            label="Tags"
            name="courseTags"
            placeholder="Enter tags and press enter"
            register={register}
            errors={errors}
            setValue={setValue}
            getValues = {getValues}
        />

        {/*component for uploading and showing preview of media */}
        <Upload
            name={"courseImage"}
            label={"CourseImage"}
            register={register}
            errors={errors}
            setValue={setValue}
            />
        
        {/*     Benefits of the Course */}
        <div className='flex flex-col space-y-2'>
            <label className='text-sm text-richblack-5'>Benefits of the course<sup className='text-pink-200'>*</sup></label>
            <textarea
            id='coursebenefits'   style={{
                            boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                        }} 
            placeholder='Enter Benefits of the course'
            {...register("courseBenefits", {required:true})}
            className='form-style resize-x-none lg:h-10 w-full bottom-1 rounded bg-richblack-600 p-[12px] text-richblack-5'
            />
            {errors.courseBenefits && (
                <span className='ml-2 text-xs tracking-wide text-pink-200'>
                    Benefits of the course are required**
                </span>
            )}
        </div>

        <RequirementField
            name="courseRequirements"
            label="Requirements/Instructions"
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
        />
        <div className='flex justify-end gap-x-2'>
            {
                editCourse && (
                    <button
                    onClick={() => dispatch(setStep(2))}
                    className=' text-[10px] md:text-sm p-2 px-1 font-semibold rounded-md flex items-center gap-x-2 bg-richblack-300'
                    >
                        Continue Without Saving
                    </button>
                )
            }

            <IconButton type={"submit"}
                text={!editCourse ? "Next" : "Save Changes"}
                />
        </div>
    </form>
  )
}

export default CourseInformationForm