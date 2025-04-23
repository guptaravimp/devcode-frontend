import React from 'react'
import HighlightText from './HighlightText'
import know_your_progres from "../../../assets/Images/Know_your_progress.png"
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png"
import Compare_with_others from "../../../assets/Images/Compare_with_others.png"
import HomeButton from './HomeButton'
function LearningLangSection() {
  return (
    <div className='mt-[100px]'>
       <div className='w-11/12 flex flex-col gap-2 '>

               <div className='w-screen text-4xl  font-semibold max-w-maxContent text-center'>
               Your swiss knife for  
               <HighlightText text={" learning any language"}/> 
               </div>
               <div className=' w-[80%] flex  items-center text-richblack-600 mx-auto text-xl text-center   '>
               Using spin making learning multiple languages easy. with 20+ languages realistic voice-over,
                progress tracking, custom schedule and more.
               </div>
               <div className='flex  flex-row items-center justify-center mt-6  '>
                     <img src={know_your_progres} alt="" className='object-contain -mr-32'/>
                     <img src={Compare_with_others} alt="" className='object-contain -mr-36'/>
                     <img src={Plan_your_lessons} alt="" className='object-contain -mr-32'/>
               </div>
               <div className='flex  items-center justify-center'>
                <HomeButton active={true} linkto={"/signup"}>Learn More</HomeButton>
               </div>
       </div>
    </div>
  )
}

export default LearningLangSection
