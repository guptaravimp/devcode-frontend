import React from 'react'
import { MdOutlineGroup } from "react-icons/md";
import { PiTreeStructureFill } from "react-icons/pi";

function CourseCard({ carddata, currentCard, setCurrentCard }) {
    return (
        <div>
    <button className={`flex flex-col  w-[360px] p-5 gap-1  ${currentCard===carddata.heading? "bg-white text-richblack-700 shadow-[12px_12px_0px] shadow-[#FFD60A]":"bg-richblack-700 text-richblue-100"}`} onClick={()=>{setCurrentCard(carddata.heading)}}>


            <div className='flex flex-col gap-5 rounded-lg p-3 '>
                <div className='flex justify-start items-start font-inter font-bold text-2xl '><h1>{carddata.heading}</h1></div>
                <div className='flex justify-start items-start text-start'><p>{carddata.description}</p></div>
                <div className='flex justify-between mb-0 pb-0 border-t border-dashed border-pure-greys-300 w-full'><p className='flex justify-evenly items-center gap-2'><MdOutlineGroup />
                {carddata.level}</p><p className='flex justify-evenly items-center gap-2'><PiTreeStructureFill />
                {carddata.lessionNumber}</p></div>
            </div>

            </button>

        </div>

    )
}

export default CourseCard
