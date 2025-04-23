import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { submitContactUs } from '../../services/operations/ContactAPI';
import countrycode from "../../data/countrycode.json"
import { setLoading } from '../../slices/authSlice';




function ContactForm() {
    const { loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
    } = useForm();



    const submitContactForm = async (data) => {
        // e.preventDefault();
        console.log("Logging data", data);
        dispatch(submitContactUs(data))


    }


    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                firstname: "",
                lastname: "",
                message: "",
                phoneNo: "",
            })
        }
    }, [reset, isSubmitSuccessful])



    return (
        <div>

            {
                loading ? (
                    <div></div>

                ) : (
                    <form onSubmit={handleSubmit(submitContactForm)} className=' mx-auto border-[1px] rounded-xl border-richblack-700 p-4 '>
                        <div className=' mx-auto w-full flex flex-col   gap-6 items-center text-richblack-600 '>

                            <div className='flex gap-8 w-full justify-center  items-center'>

                                <div className='flex flex-col   w-[40%]'>
                                    <label className='w-full gap-3 flex flex-col mt-8 text-xl text-white p-2' htmlFor="">First Name</label>
                                    <input type="text"
                                        style={{
                                            boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                                        }} className='h-10 w-full bottom-1 rounded bg-richblack-800 p-[12px] text-richblack-5'
                                        name="firstname"
                                        id='firstname'
                                        placeholder='"Enter Your name'
                                        {...register("firstname", { required: true })} />
                                    {
                                        errors.firstname && (
                                            <span>Please Enter Your name </span>
                                        )
                                    }
                                </div>


                                <div className='flex flex-col w-[40%]'>
                                    <label className='w-full gap-3 flex flex-col   mt-8 text-xl text-white p-2' htmlFor="lastname">Last Name</label>
                                    <input type="text"
                                        style={{
                                            boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                                        }} className='h-10 w-full bottom-1 rounded bg-richblack-800 p-[12px] text-richblack-5'
                                        name="lastname"
                                        id='lastname'
                                        placeholder='"Enter Your name'
                                        {...register("firstname")} />

                                </div>

                            </div>

                            <div className='flex gap-8 w-full justify-center  items-center'>

                                <div className='flex flex-col gap-5 w-[85%] justify-start items-start '>
                                    <label className='w-full   text-xl text-white p-2 gap-3 flex flex-col mt-8' htmlFor="email">Email Address</label>
                                    <input type="text" name="email" id='email' placeholder='Enter Your Email'
                                        style={{
                                            boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                                        }} className='h-10 w-full bottom-1 rounded bg-richblack-800 p-[12px] text-richblack-5'
                                        {...register("email", { required: true })} />
                                    {
                                        errors.email && (
                                            <span>Please Enter Your Email </span>
                                        )
                                    }
                                </div>

                            </div>



                            {/* phone no  */}


                            <div className='flex gap-8 w-full justify-center  items-center'>

                                <div className='flex flex-col gap-2 '>
                                    <label htmlFor="" className='  text-xl text-white p-2 w-full gap-3 flex flex-col mt-8'>Phone Number</label>
                                    <div className='flex gap-5'>
                                        {/* dropdown  */}
                                        <div>
                                            <select type="" name="dropdown" id="dropdown" style={{
                                                boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                                            }} className='h-10 w-full bottom-1 rounded bg-richblack-800 p-[12px] text-richblack-5' {...register("countrycode", { required: true })}>
                                                {
                                                    countrycode.map((element, index) => {
                                                        return (
                                                            <option key={index} value={element.code}>{element.code}-{element.country}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <input style={{
                                            boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                                        }} className='h-10 w-full bottom-1 rounded bg-richblack-800 p-[12px] text-richblack-5' type="text" name="phonenumber" id="phonenumber" {...register("phoneNo", {
                                            required: { value: true, message: "Please Enter Your PhoneNo" },
                                            maxLength: { value: 12, message: "Invalid Phone Number " }
                                        })} placeholder='Enter Your mobile ' />
                                        

                                    </div>
                                    {
                                            errors.phoneNo && (
                                                <span className='text-yellow-200'>
                                                    {errors.phoneNo.message}
                                                </span>
                                            )
                                        }
                                </div>


                            </div>

                            <div className='flex gap-8 w-full justify-center  items-center'>
                                <div className='flex flex-col gap-2 '>
                                    <label htmlFor="message" className='   text-xl text-white p-2 w-full gap-3 flex flex-col mt-8'> Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        style={{
                                            boxShadow: "inset 0px -2px 0px rgba(255, 255, 255, 0.18)",
                                        }}
                                        className="w-full rounded bg-richblack-800 p-[12px] text-richblack-5"
                                        cols={70}
                                        rows={7}
                                        placeholder="Enter Your Message"
                                        {...register("message", { required: true })}
                                    />

                                    {
                                        errors.message && (
                                            <span className='text-yellow-200'>Please Enter Your Message </span>
                                        )
                                    }
                                </div>
                            </div>



                        </div>
                        <div className='flex gap-5 ml-12 w-full justify-center  items-center'>
                            <button type='submit' className='mt-10 bg-yellow-200 rounded-xl h-[50px] p-2 w-[60%] text-xl text-richblack-900'>Send Message </button>
                        </div>

                    </form>

                )





            }


        </div>
    )
}

export default ContactForm




