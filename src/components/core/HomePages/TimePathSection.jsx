import React from 'react'
import logo1 from "../../../assets/TimeLineLogo/logo1.svg"
import logo2 from "../../../assets/TimeLineLogo/logo2.svg"
import logo3 from "../../../assets/TimeLineLogo/logo3.svg"
import logo4 from "../../../assets/TimeLineLogo/logo4.svg"
import timelineimage from "../../../assets/Images/timelineimage.png"
const timeline=[
    {
        Logo:logo1,
        heading:"Leadership",
        descrption:"Fully commited to Learning path "
    },
    {
        Logo:logo2,
        heading:"Responsibility",
        descrption:"Students will always be our top priority "
    },
    {
        Logo:logo3,
        heading:"Flexibility",
        descrption:"The ability to switch is an important skills "
    },
    {
        Logo:logo4,
        heading:"Solve the problem ",
        descrption:"Code your way to a solution "
    }
]
function TimePathSection() {
  return (
    <div>
      <div className='flex w-11/12 flex-row gap-24 items-center  font-inter'>
           {/* first  */}
          <div className='w-[40%]  max-w-maxContent flex flex-col gap-12'>
            {
                timeline.map((element,index)=>{
                    return(
                        <div className='flex flex-row  gap-8' key={index}>
                            <div className=' boxshadow   w-[50px] h-[50px] flex justify-center bg-white items-center'>
                                <img src={element.Logo} alt="" />
                            </div>
                            <div className='max-w-maxContent'>
                                <h2 className='font-bold'>{element.heading}</h2>
                                <p>{element.descrption}</p>
                            </div>
                        </div>
                    )
                        
                    
                })
            }

          </div>
          {/* seconds  */}
          <div className='relative  shadow-[12px_12px_0px] shadow-[#ededea] '>
               <img   src={timelineimage} className='shadow-white object-cover  h-[500px]' alt="" />
               <div className=' w-[80%] absolute bg-caribbeangreen-700 flex flex-row text-white  left-[50%] translate-x-[-50%]
               translate-y-[-50%]'>
                  <div className='flex gap-4 p-6 items-center border-r border-caribbeangreen-300'>
                    <h1 className='text-2xl'>10+</h1>
                    <p className='text-caribbeangreen-300 text-xl '>Years of Experience</p>
                  </div>
                  <div className='flex gap-4 p-6 items-center '>
                    <h1 className='text-2xl'>250+</h1>
                    <p className='text-caribbeangreen-300 text-xl'>Type of Courses</p>
                  </div>
               </div>
          </div>

      </div>
    </div>
  )
}

export default TimePathSection
