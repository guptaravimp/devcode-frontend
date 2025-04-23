import React, { useState } from 'react'
import IconButton from './IconButton'
function ConfirmationModal({modalData}) {
   

  console.log("Modaldata is",modalData)
  return (
    <div className='bg-richblack-600  absolute  transition-all bottom-96 text-white border-2 border-yellow-200 p-2 rounded-md '>
      <div className='flex  flex-col justify-between items-start ml-2 gap-2 rounded-md'>
        <p className='font-bold text-xl'>
            {modalData.text1}
        </p>
        <p>
            {modalData.text2}
        </p>
        <div className='flex gap-3'>
        
            <IconButton onclick={modalData?.btn1Handler}
            text={modalData?.btn1Text}/>
             <button onClick={modalData?.btn2Handler} className='border-[2px] rounded bg-white text-richblack-600 w-20 font-bold'>
              {modalData?.btn2Text}

             </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal
