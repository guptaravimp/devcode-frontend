import React, { useState } from 'react'
import { HomePageExplore } from '../../../data/homepage-explore';
import HighlightText from './HighlightText';
import CourseCard from './CourseCard';
const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"

]
function ExploreMore() {
    // const [currentTab,setCurrentTab]=useState(tabName[0]);
    // const [course,setCourse]=useState(HomePageExplore[0].courses)
    // const [currentCard,setCurrentCard]=useState(HomePageExplore[0].courses[0].heading)
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
        console.log(result[0].courses);
        // setCurrentCard(value)
        // const result=HomePageExplore.filter((course)=>course.tag===value)
        // setCourse(result[0].courses)
        // setCurrentCard(result[0].courses[0].heading)
    }
    return (
        <div className=' absolute translate-y-[400px]  flex flex-col items-center justify-evenly w-[80%]'>

            <div className=' text-4xl font-semibold text-center '>
                Unlock The
                <HighlightText text={"Power of Code"} />
            </div>
            <p className='text-richblack-300 text-center text-sm font-semibold mt-2'>Learn to Build Anything You Can Imagine</p>


            <div className='mt-5 flex flex-row rounded-full bg-richblack-800 mb-3 border-richblack-100
      px-1 py-1'>
                {
                    tabsName.map((element, index) => {
                        return (
                            <div
                                className={` text-[13px] lg:text-[16px] flex flex-row items-center gap-2 
                ${currentTab === element
                                        ? "bg-richblack-900 text-richblack-5 font-medium"
                                        : "text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer
                hover:bg-richblack-900 hover:text-richblack-5 text-center px-3 py-1 lg:px-7 lg:py-2`}
                                key={index}
                                onClick={() => setMyCards(element)}
                            >
                                {element}
                            </div>
                        )
                    })
                }

            </div>
            <div className='lg:h-[150px] '>
                <div className='absolute flex flex-row translate-x-[-600px]   gap-8 w-full justify-between items-start  mt-4'>
                         {
                            courses.map((element,index)=>{
                                return (
                                    <CourseCard key={index} carddata={element} currentCard={currentCard}
                                    setCurrentCard={setCurrentCard}/>
                                )
                            })

                         }
                         


                </div>

            </div>
        </div>
    )
}

export default ExploreMore
