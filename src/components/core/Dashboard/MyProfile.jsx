import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import IconButton from '../../common/IconButton';
import { FaUserEdit } from "react-icons/fa";
import HighlightText from '../HomePages/HighlightText';
function MyProfile() {
    const user = useSelector((state) => state.profile);

    // console.log("My user is ", user)
    const navigate = useNavigate()
    console.log("ha sahi hai ")
    return (
        <div className="mx-auto w-[100%]  flex flex-col justify-evenly items-center  text-white ">
            <div className='mx-auto w-[100%] flex items-start  '>
                <h1 className='text-4xl mt-3 '>Welcome to your Profile <HighlightText text={`${user.user?.firstName + " " + user.user?.lastName}`} /></h1>
            </div>

            <div className='mx-auto mt-6 w-[90%] border-1 flex justify-between  rounded-md  bg-richblack-800  border-richblack-600 p-12'>
                <div className='flex justify-evenly items-center  gap-4'>
                    <img src={user.user?.image} alt={`profile-${user?.firstName}`}
                        className='aspect-square h-[50px] rounded-full object-cover ' />
                    <div>
                        <p>{user.user?.firstName + " " + user.user?.lastName}</p>
                        <p>{user.user?.email}</p>
                    </div>

                </div>
                <div className='relative'>
                    <IconButton text={`Edit`} onclick={() => navigate("/dashboard/setting")} />
                </div>


            </div>

            <div className='mx-auto w-[90%] border-1 flex flex-col gap-4 justify-between mt-4 rounded-md  bg-richblack-800  border-richblack-600 p-12'>

                <div className='mx-auto   w-[100%] flex justify-between items-center'>
                    <p className='text-2xl font-bold '>About</p>
                    <div className='relative'>
                        <IconButton text={`Edit`} onclick={() => navigate("/dashboard/setting")} />
                    </div>
                </div>
                <p className='text-richblack-100 mt-4'>{user.user?.additionalDetails?.about ?? "Write Something About Your Self"}</p>
            </div>

            <div className='mx-auto w-[90%] border-1 flex flex-col gap-4 justify-between mt-4 rounded-md  bg-richblack-800  border-richblack-600 p-12'>

                <div className='mx-auto   w-[100%] flex justify-between items-center'>
                    <p className='text-2xl font-bold '>Personal Details</p>
                    <div className='relative'>
                        <IconButton text={`Edit`} onclick={() => navigate("/dashboard/setting")} />
                    </div>
                </div>
                <div className=' w-[80%] flex text-xl flex-col gap-8 mt-10  '>
                    <div className='flex justify-between items-center  '>
                        <div className='w-[50%] flex  flex-col gap-2   '>
                            <p className='text-richblack-400'>First Name</p>
                            <p>{user.user?.firstName}</p>

                        </div>
                        <div className=' w-[50%] flex  flex-col items-start ml-52 gap-2'>
                            <p className='text-richblack-400 items-start flex  '>Last Name</p>
                            <p>{user.user?.lastName}</p>

                        </div>
                    </div>
                    <div className='flex justify-between items-center  '>
                        <div className='w-[50%] flex  flex-col gap-2  '>
                            <p className='text-richblack-400'>Email</p>
                            <p>{user.user?.email}</p>

                        </div>
                        <div className=' w-[50%] flex  flex-col items-start ml-48 gap-2'>
                            <p className='text-richblack-400 items-start flex  '>Contact Number</p>
                            <p>{user.user?.additionalDetails?.contactNumber || "undefined"}</p>

                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default MyProfile
