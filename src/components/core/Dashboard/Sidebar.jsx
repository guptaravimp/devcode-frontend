import React, { useState } from 'react'
import { sidebarLink } from '../../../data/dashboard-links'
import { logout } from "../../../services/operations/authAPI"
import { useDispatch, useSelector } from 'react-redux'
import SidebarLinks from './SidebarLinks'
import { useNavigate } from 'react-router-dom'
import { VscSignOut } from "react-icons/vsc";
import ConfirmationModal from '../../common/ConfirmationModal'
function Sidebar() {
    const { user, loading: profileLoading } = useSelector((state) => state.profile)
    const dispatch = useDispatch();
    const [confirmationModal, setConfirmationModal] = useState(null)
    const navigate = useNavigate();
    const { loading: authloading } = useSelector((state) => state.auth)
    if (profileLoading || authloading) {
        return (
            <div className='spinner mt-[10px] text-white text-center'>Loading...</div>

        )
    }
    // console.log("Ha mai chal raha hu acche se ")
    return (

        <div className='mx-auto  ml-0'>
            <div className='flex min-w-[222px] ml-0 flex-col border-1 border-r-richblack-700 h-[calc(100vh-3.5rem)] 
                                     bg-richblack-800 py-10'>

                <div className='flex flex-col'>
                    {
                        sidebarLink.map((link) => {
                            if (link.type && user?.accountType !== link.type) return null
                            return (
                                <SidebarLinks name={link.name} path={link.path} iconName={link.icon} key={link.id} />
                            )
                        })
                    }

                </div>
                <div className='mx-auto mt-6 mb-6 w-full h-[1px]  bg-richblack-600 '></div>
                <div className='flex flex-col'>
                    <SidebarLinks name="Setting" path={"/dashboard/setting"} iconName="VscSettingsGear" />

                    <button 
                        onClick={ () => setConfirmationModal({
                            text1: "Are You Sure ?",
                            text2: "You will be logged out of your Account",
                            btn1Text: "Logout",
                            btn2Text:"Cancel",
                            btn1Handler: () => dispatch(logout(navigate)),
                            btn2Handler: () => setConfirmationModal(null),
                        })}
                        className='relative text-sm font-medium text-richblack-300 mx-4 my-4'>

                        <div className='flex items-center gap-x-2 p-4'>
                            <VscSignOut className='text-lg'/>
                            <span>Logout</span>
                        </div>

                    </button>
                </div>


            </div>

            {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
        </div>
    )
}

export default Sidebar
