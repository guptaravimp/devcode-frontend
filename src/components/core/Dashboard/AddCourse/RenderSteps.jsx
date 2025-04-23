import React from 'react'
import { useSelector } from 'react-redux'
import { FaCheck } from "react-icons/fa";
import CourseInformationForm from "../../Dashboard/AddCourse/CourseInformation/CourseInformationForm"
import CourseBuilderFormx from './CourseBuilderForm/CourseBuilderFormx';
import PublishForm from './PublishForms/PublishForm';
// import CourseBuilderForm from './CourseBuilderForm/CourseBuilderFormx';
function RenderSteps() {
    const { step } = useSelector((state) => state.course)
    const steps = [
        {
            id: 1,
            title: "Course Information"
        },
        {
            id: 2,
            title: "Course Builder "
        },
        {
            id: 3,
            title: "Publish"
        }
    ]


    return (
        <div className='mx-auto flex flex-col justify-center items-center'>


            <div className='flex gap-6  w-[70%]'>

                {
                    steps.map((item, index) => {
                        return < >
                            <div className=' ' key={index}>
                                <div className={  `h-10 w-10 text-center flex justify-center items-center rounded-3xl  ${step === item.id ? "bg-yellow-900 border-2  border-yellow-400 text-yellow-400 " : " border-2 border-richblack-400 bg-richblack-800 text-richblack-400"}`}>
                                    {
                                        step > item.id ? (<FaCheck />) : (item.id)
                                    }
                                </div>
                            </div>
                            {item.id < 3 && (
                                <div className={`h-[calc(34px/2)] w-[100%]  border-dashed border-b-2 ${step > item.id ? "border-yellow-50" : "border-richblack-700"}
                    }`}></div>
                            )}
                        </>
                    })
                }
            </div>

            <div className='relative mb-16 flex w-[100%] mt-2 select-none justify-between items-center text-center '>
                {steps.map((item) => (
                    <>
                        <div key={item.id} className='flex md:min-w-[180px] flex-col   text-center'>
                            <p className= {`${step === item.id ? " text-richblack-5 " : " text-richblack-500"} ml-3 md:ml-0 text-[10px] md:text-sm  text-center `}>{item.title}</p>
                        </div>
                    </>
                ))}
            </div>

          



            {
                step == 1 && <CourseInformationForm  />
            }
            {
                step == 2 && <CourseBuilderFormx />
            }
            {
                step==3 && <PublishForm/>
            }
        </div>
    )
}

export default RenderSteps
