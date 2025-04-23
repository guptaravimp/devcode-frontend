import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { updateProfilePicture } from '../services/operations/profileAPI';
import ChangeProfilePicture from '../components/core/Dashboard/Settings/ChangeProfilePicture';
import PersonalInformation from '../components/core/Dashboard/Settings/PersonalInformation';
import PasswordUpdate from '../components/core/Dashboard/Settings/PasswordUpdate';
import DeleteAccount from '../components/core/Dashboard/Settings/DeleteAccount';


function Setting() {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    const user = useSelector((state) => state.profile);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);



    // /// update profile picture 
    // // const profile_picture = useSelector((state) => state.auth.image)
    // const profile_picture = user.user?.image;
    // // console.log("Profile picture is ",profile_picture)
    // const [profilepicture, setprofilepicture] = useState(profile_picture)

    // const token = useSelector(state => state.auth.token);
    // // console.log("Token is ",token)
    // const handleUpload = (e) => {
    //     e.preventDefault();
    //     const pfp = e.target.files;
        
    //     updateProfilePicture(token, pfp);
    
    //     // updatePfp(token,file);
    // }

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     setprofilepicture(URL.createObjectURL(file));
    // }





    return (
        <div className='mx-auto  flex flex-col gap-4 '>
            <div className='mx-auto w-full flex items-start text-3xl'>
                <h1>Edit Profile</h1>
            </div>


           {/* change profile picture  */}
            <ChangeProfilePicture/>

          
           <PersonalInformation/>




           <PasswordUpdate/>


            <DeleteAccount/>

            {/* <div className='mx-auto  w-[85%] gap-4 flex justify-start p-4 items-end  '>

                <div className='flex gap-2'>
                    <button className='bg-yellow-100 text-richblack-600 h-9 w-20 rounded-md text-[17px]' >Save</button>
                    <button className='bg-richblack-600 text-white h-9 w-20 rounded-md text-[17px]'>Cancel</button>
                </div>
            </div> */}


        </div>
    )
}

export default Setting
