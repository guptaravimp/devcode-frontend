import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import IconButton from '../../../common/IconButton';
import { useNavigate } from 'react-router-dom';
import { changePasswordform } from '../../../../services/operations/profileAPI';
import { useForm } from 'react-hook-form';
function PasswordUpdate() {
    const token = useSelector((state) => state.auth?.token)

    const navigate = useNavigate()

    const [showOldPassword, setShowOldPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showNewConfirmPassword, setShowCOnfirmNewPassword] = useState(false)

    //   "oldPassword":"1234",
    //     "newPassword":"Ravi@23",
    //     "confirmNewPassword":"Ravi@23"
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const submitPasswordForm = async (data) => {
        console.log("pahla wala ", token)
        // console.log("password Data - ", data)
        try {
            await changePasswordform(token, data)
        } catch (error) {
            console.log("error while updating  ", error.message)
        }
    }
    return (
        <form onSubmit={handleSubmit(submitPasswordForm)}>
            <div className='mx-auto w-[85%] rounded-md  gap-10 flex flex-col justify-start p-4 items-start bg-richblack-800'>


                <div className='flex  justify-between  gap-10 items-center w-[99%]'>
                    <div className='relative flex flex-col w-[50%] '>
                        <label htmlFor="oldPassword" className="lable-style">
                            Old Password
                        </label>
                        <input
                            type={showOldPassword ? "text" : "password"}
                            name="oldPassword"
                            id="oldPassword"
                            placeholder="Enter Current Password"
                            className="form-style bg-richblack-600 w-[100%] rounded  h-10 mt-2 p-2"
                            {...register("oldPassword", { required: true })}
                        />
                        {/* <input type={`${showPassword1 ? ("text") : ("password")}`} className=' ' /> */}
                        <span
                            className='translate-x-[320px] translate-y-[-33px]  w-8  text-2xl'>

                            {
                                showOldPassword ? (<FaEye onClick={() => setShowOldPassword(false)} />) : (<FaEyeSlash onClick={() => setShowOldPassword(true)} />)
                            }
                        </span>
                        {errors.oldPassword && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please enter your Current Password.
                            </span>
                        )}
                    </div>
                    <div className='relative flex flex-col w-[50%] '>
                        <label htmlFor="newPassword" className="lable-style">
                            New Password
                        </label>
                        <input
                            type={showNewPassword ? "text" : "password"}
                            name="newPassword"
                            id="newPassword"
                            placeholder="Enter New Password"
                            className="form-style bg-richblack-600 w-[100%] rounded  h-10 mt-2 p-2"
                            {...register("newPassword", { required: true })}
                        />
                        {/* <input type={`${showPassword1 ? ("text") : ("password")}`} className=' ' /> */}
                        <span
                            className='translate-x-[320px] translate-y-[-33px]  w-8  text-2xl'>

                            {
                                showNewPassword ? (<FaEye onClick={() => setShowNewPassword(false)} />) : (<FaEyeSlash onClick={() => setShowNewPassword(true)} />)
                            }
                        </span>

                        {errors.newPassword && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please enter your New Password.
                            </span>
                        )}
                    </div>
                    <div className='relative flex flex-col w-[50%] '>
                        <label htmlFor="newPassword" className="lable-style">
                            Confirm New Password
                        </label>
                        <input
                            type={showNewConfirmPassword ? "text" : "password"}
                            name="confirmNewPassword"
                            id="confirmNewPassword"
                            placeholder="Confirm New Password"
                            className="form-style bg-richblack-600 w-[100%] rounded  h-10 mt-2 p-2"
                            {...register("confirmNewPassword", { required: true })}
                        />
                        {/* <input type={`${showPassword1 ? ("text") : ("password")}`} className=' ' /> */}
                        <span
                            className='translate-x-[320px] translate-y-[-33px]  w-8  text-2xl'>

                            {
                                showNewConfirmPassword ? (<FaEye onClick={() => setShowCOnfirmNewPassword(false)} />) : (<FaEyeSlash onClick={() => setShowCOnfirmNewPassword(true)} />)
                            }
                        </span>

                        {errors.newPassword && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please enter your New Password.
                            </span>
                        )}
                    </div>
                </div>



            </div>
            <div className=" mx-auto w-[85%] mt-4 flex justify-end gap-2">
                <button
                    onClick={() => {
                        navigate("/dashboard/my-profile")
                    }}
                    className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
                >
                    Cancel
                </button>
                <IconButton type="submit" text="Update" />
            </div>

        </form>


    )
}

export default PasswordUpdate
