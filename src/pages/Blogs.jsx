import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaExternalLinkAlt } from "react-icons/fa";

function Blogs() {
    const navigate=useNavigate();
  return (
    <div className='mx-auto flex justify-start mt-40 items-center '>
        <div className='mx-auto  border-[1px] border-richblack-700 p-10 rounded-xl text-white flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold text-yellow-300'>Coming Soon.....</h1>
          <button onClick={() => navigate("/catalog/Devops")} className='mt-4 flex justify-evenly items-center gap-3 bg-yellow-200 rounded-xl text-richblack-900 text-xl font-bold p-4'>Explore Courses<FaExternalLinkAlt />
          </button>
        </div>
      
    </div>
  )
}

export default Blogs
