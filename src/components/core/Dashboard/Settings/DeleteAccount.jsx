import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProfileAccount } from '../../../../services/operations/profileAPI';
import { useNavigate } from 'react-router-dom';

function DeleteAccount() {
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const token=useSelector((state)=>state.auth.token)
    const handleDeletebutton = (e) => {
        try{
            dispatch(deleteProfileAccount(token, navigate))
        }catch{
            console.log("error while deleteing account- ", error.message)
        }
       
    }

    return (
        <button className=' mt-8' onClick={handleDeletebutton}>
            <div className='mx-auto my-auto w-[85%] rounded-md  flex  justify-arround p-4 items-start bg-pink-900'>


                <div className='mx-auto w-[8%] flex flex-col items-start h-[100%]'>
                    <div className='bg-pink-700 text-4xl h-[50px] w-[50px] flex justify-center items-center rounded-3xl'>
                        <MdDelete className='text-pink-200' />
                    </div>
                </div >
                <div className='mx-aut  flex flex-col justify-start items-start gap-1 w-[90%]'>
                    <p className='font bold text-xl'>Delete Account</p>
                    <>
                        <p>Would you like to delete account?</p>
                        <p className='justify-start items-start'>This account contains Paid Courses. Deleting your account will remove all
                        </p>
                        <p>the contain associated with it.</p>
                    </>



                    <p className='font-mono text-pink-300'>I want to delete my account.</p>
                </div>



            </div>
        </button>
    )
}

export default DeleteAccount
