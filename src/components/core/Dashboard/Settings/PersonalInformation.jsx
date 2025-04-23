import React from 'react'
import { useForm } from "react-hook-form"
import countryCodeData from "../../../../data/countrycode.json"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '../../../common/IconButton'
import { updateProfile } from '../../../../services/operations/profileAPI'
// import { updateProfileform } from '../../../../services/operations/profileAPI'

const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"]


function PersonalInformation() {
    // const { user } = useSelector((state) => state.profile);
    const user = useSelector((state) => state.profile.user);

    const token = useSelector((state) => state.auth?.token)
    console.log("Token is yaha ghau bhaoi", token)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const updateProfileformData = async (data) => {
        console.log("Form Data -is ", data)
        console.log("token is yahi hai  ", token)
        // e.preventDefault()
        try {
            dispatch(updateProfile(token, data))
        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message)
        }
    }
    return (

        <>

            <form action="" onSubmit={handleSubmit(updateProfileformData)}>
                <div className='mx-auto w-[85%] rounded-md gap-4 flex flex-col justify-start p-4 items-start    bg-richblack-800'>
                    <div className='h-full flex justify-start items-center'>
                        <p className='text-3xl'>Personal Information</p>
                    </div>

                    <div className='flex  justify-between  gap-10 items-center w-[99%] '>
                        <div className='flex flex-col w-[50%] '>First Name
                            <input name="firstName"
                                id="firstName"
                                placeholder="Enter first name"
                                className="form-style bg-richblack-600 rounded  h-10 mt-2 p-2 " defaultValue={user?.firstName}  {...register("firstName", { required: true })} />{errors.firstName && (
                                    <span className="-mt-1 text-[12px] text-yellow-100">
                                        Please enter your first name.
                                    </span>
                                )}
                        </div>
                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <label htmlFor="lastName" className="lable-style">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Enter last name"
                                className="form-style bg-richblack-600 rounded  h-10 mt-2 p-2"
                                {...register("lastName", { required: true })}
                                defaultValue={user?.lastName}
                            />
                            {errors.lastName && (
                                <span className="-mt-1 text-[12px] text-yellow-100">
                                    Please enter your last name.
                                </span>
                            )}
                        </div>
                    </div>
                    {/* <div className='flex flex-col  w-[50%] '>Profession
                        <select name="dropdown" id="dropdown" className='bg-richblack-600 rounded h-10 mt-2 p-2 ' h-10 mt-2 p-2>
                            <option value="">Professional Developer </option>
                            <option value="">SDE </option>
                            <option value="">Data Engineer</option>
                            <option value="">Student</option>

                        </select>
                    </div> */}
                </div>


                <div className='mx-auto w-[85%] rounded-md gap-4 flex flex-col justify-start p-4 items-start mt-4    bg-richblack-800'>


                    <div className='flex  justify-between   gap-10 items-center w-[99%]'>
                        <div className='flex flex-col w-[50%] '>Date Of Birth
                            <input
                                type="date"
                                name="dateOfBirth"
                                id="dateOfBirth"
                                className="form-style bg-richblack-600 rounded  h-10 mt-2 p-2"
                                {...register("dateOfBirth", {
                                    required: {
                                        value: true,
                                        message: "Please enter your Date of Birth.",
                                    },
                                    max: {
                                        value: new Date().toISOString().split("T")[0],
                                        message: "Date of Birth cannot be in the future.",
                                    },
                                })}
                                defaultValue={user?.additionalDetails?.dateOfBirth}
                            />{errors.dateOfBirth && (
                                <span className="-mt-1 text-[12px] text-yellow-100">
                                    {errors.dateOfBirth.message}
                                </span>
                            )}
                            {/* <input type="Date" className='bg-richblack-600 rounded  h-10 mt-2 p-2 ' /> */}
                        </div>
                        <div className='flex flex-col gap-1  w-[50%] '>Gender




                            <select
                                type="radio"
                                name="gender"
                                id="gender"
                                className="form-style h-10 w-full p-2 bg-richblack-600 rounded-md "
                                {...register("gender", { required: true })}
                                defaultValue={user?.additionalDetails?.gender}
                            >
                                {genders.map((ele, i) => {
                                    return (
                                        <option key={i} value={ele}>
                                            {ele}
                                        </option>
                                    )
                                })}
                            </select>
                            {errors.gender && (
                                <span className="-mt-1 text-[12px] text-yellow-100">
                                    Please enter your Date of Birth.
                                </span>
                            )}




                            {/* <div className='flex gap-1 w-full justify-evenly items-center   bg-richblack-600 rounded  h-10 mt-2 p-2'>
                                <div className='flex justify-start items-center  gap-2  w-[30%] h-8 p-2'>
                                    <input type="radio" id="male" name="gender" className='h-4 w-4 bg-richblack-800 border-[2px] border-richblack-400' checked />
                                    <label for="male">Male</label>
                                </div>
                                <div className='flex justify-start items-center gap-2   w-[30%] h-8 p-2'>
                                    <input type="radio" id="female" name="gender" className='h-4 w-4 bg-richblack-800 border-[2px] border-richblack-400' checked />
                                    <label for="female">Female</label>
                                </div>
                                <div className='flex justify-start items-center  gap-2  w-[30%] h-8 p-2'>
                                    <input type="radio" id="other" name="gender" className='h-4 w-4 bg-richblack-800 border-[2px] border-richblack-400' checked />
                                    <label for="other">other</label>
                                </div>
                            </div> */}
                        </div>
                    </div>



                    <div className=' flex  justify-between  gap-10 items-center w-[99%]'>
                        <div className='flex flex-col w-[50%] '><label htmlFor="contactNumber" className="lable-style">
                            Contact Number
                        </label>
                            <input
                                type="tel"
                                name="contactNumber"
                                id="contactNumber"
                                placeholder="Enter Contact Number"
                                className="form-style bg-richblack-600 rounded w-[100%]  h-10 mt-2 p-2"
                                {...register("contactNumber", {
                                    required: {
                                        value: true,
                                        message: "Please enter your Contact Number.",
                                    },
                                    maxLength: { value: 12, message: "Invalid Contact Number" },
                                    minLength: { value: 10, message: "Invalid Contact Number" },
                                })}
                                defaultValue={user?.additionalDetails?.contactNumber}
                            />
                            {errors.contactNumber && (
                                <span className="-mt-1 text-[12px] text-yellow-100">
                                    {errors.contactNumber.message}
                                </span>
                            )}
                            {/* <div className='flex gap-4'>
                                <select name="dropdown" id="dropdown" className='bg-richblack-600 rounded h-10 mt-2 p-2 w-[20%] ' h-10 mt-2 p-2>
                                    {
                                        countryCodeData?.map((data, index) => {
                                            return (
                                                <option value="" key={index}>{data.code} </option>
                                            )
                                        })
                                    }
                                </select>
                                <input type="text" className='bg-richblack-600 rounded w-[80%]  h-10 mt-2 p-2 ' />

                            </div> */}


                        </div>
                        <div className='flex flex-col w-[50%] '>
                            <label htmlFor="about" className="lable-style">
                                About
                            </label>
                            <input
                                type="text"
                                name="about"
                                id="about"
                                placeholder="Enter Bio Details"
                                className="form-style bg-richblack-600 rounded  h-10 mt-2 p-2 "
                                {...register("about", { required: true })}
                                defaultValue={user?.additionalDetails?.about}
                            />
                            {errors.about && (
                                <span className="-mt-1 text-[12px] text-yellow-100">
                                    Please enter your About.
                                </span>
                            )}
                        </div>
                    </div>


                </div>

                <div className="mx-auto w-[85%] mt-4 flex justify-end gap-2">
                    <button
                        onClick={() => {
                            navigate("/dashboard/my-profile")
                        }}
                        className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
                    >
                        Cancel
                    </button>
                    <IconButton type="submit" text="Save" />
                </div>


            </form >


        </>

    )
}

export default PersonalInformation
