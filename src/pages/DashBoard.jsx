import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/core/Dashboard/Sidebar';
function DashBoard() {

  const { loading: authloading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile)

  if (profileLoading || authloading) {
    return (
      <div className='mt-[10px]'>
       <div class="spinner"></div>
      </div>
    )
  }
  console.log("chal to raha hu mai ")
  return (
    <div className='mx-auto  relative flex justify-between w-full text-white h-[calc(100vh-3.5rem)]   '>
      <Sidebar />
      <div className=' h-[calc(100vh-3.5rem)] lg:w-[90%] ml-1 overflow-auto'>
        <div className='mx-auto w-12/12 max-w-[1000px] py-10 '>
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default DashBoard
