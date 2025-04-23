import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import HighlightText from '../components/core/HomePages/HighlightText';
import HomeButton from '../components/core/HomePages/HomeButton';
import homevideo from "../assets/Images/homevideo.mp4"
import CodeDiv from '../components/core/HomePages/CodeDiv';

import LearningLangSection from '../components/core/HomePages/LearningLangSection';
import BecomeanInstructor from '../components/core/HomePages/BecomeanInstructor';
import ExploreMore from '../components/core/HomePages/ExploreMore';
import Footer from '../components/common/Footer';
import { useSelector } from 'react-redux';
// import Testimonial from '../components/core/HomePages/Testimonial';
// components are function 
function Home() {
    const loading=useSelector((state)=>state.auth)
    return (

    

        <div className='flex flex-col justify-center'>
            {/* Section1  */}
            <div className='  relative flex flex-col justify-evenly items-center text-white '>
                <Link to={"/signup"}>
                    <div className='group  mt-16 p-1 mx-auto w-fit max-w-maxContent rounded-full bg-richblack-800 font-bold'>
                        <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] group-hover:bg-richblack-900'>
                            <p>Become an Instructor</p><FaArrowRightLong />
                        </div>
                    </div>
                </Link>
                <div className='text-4xl mt-6'>
                    <h1>Empower Your Future with <HighlightText text={"Coding Skills"} /> </h1>
                </div>
                <div className='w-[60%] text-center text-lg flex mt-4 text-richblack-300'>
                    <p>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. </p>
                </div>
                <div className='flex  items-center gap-2 mt-6'>
                    <HomeButton active={true} linkto={"/login"}>Book a Demo</HomeButton>
                    {/* <HomeButton text={"Book a Demo"}/> */}
                    <HomeButton active={false} linkto={"/signup"}>Learn More</HomeButton>
                </div>
                <div className='  w-9/12 text-white mt-6  shadow-[12px_12px_0px] shadow-[#ededea]'>
                    <video className='' muted loop autoPlay>
                        <source src={homevideo} type='video/mp4' />
                    </video>
                </div>
                {/* code section 1  */}
                <div className='mt-[20px]  p-6 w-[82%]'>
                    <CodeDiv
                        position={"lg:flex-row"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Unlock your  <HighlightText text={"coding potential"} />  with our online courses
                            </div>
                        }
                        subheading={
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        btn1={
                            {
                                btntext: "try it YourSelf",
                                linkto: "/signup",
                                active: true,

                            }
                        }
                        btn2={
                            {
                                btntext: "Learn More",
                                linkto: "/login",
                                active: false,

                            }
                        }
                        codeblock={`<!DOCTYPE html>
<html>
<head>
  <title>Example</title>
</head>
<body>
  <h1><a href="/">Header</a></h1>
    <a href="one/">One</a><a href="two/">Two</
    a><a href="three/">Three</a>
</body>
</html>`}

                        codeColor={"text-yellow-400"}

                    />
                   <ExploreMore/>
                </div>

               
                {/* code section 2  */}
                <div className='mt-[20px] p-6 w-[82%]'>
                    <CodeDiv
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Start coding
                                <HighlightText text={" in seconds"} />  with our online courses
                            </div>
                        }
                        subheading={
                            "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                        }
                        btn1={
                            {
                                btntext: "Continue Lession",
                                linkto: "/signup",
                                active: true,

                            }
                        }
                        btn2={
                            {
                                btntext: "Learn More",
                                linkto: "/login",
                                active: false,

                            }
                        }
                        codeblock={`<!DOCTYPE html>
<html>
<head>
  <title>Example</title>
</head>
<body>
  <h1><a href="/">Header</a></h1>
    <a href="one/">One</a><a href="two/">Two</
    a><a href="three/">Three</a>
</body>
</html>`}

                        codeColor={"text-yellow-25"}

                    />

                </div>
            </div>
            {/* section2  */}
            <div className='bg-pure-greys-5 text-richblack-700 border border-black mt-96 pb-8'>


                <div className='homepage-background  h-[300px] '>
                    <div className='w-11/12 max-w-maxContent flex  justify-center  items-center gap-4 mx-auto'>
                        <div className='h-[250px]'></div>

                        <div className='flex gap-4 ' >

                            <HomeButton active={true} linkto={"/signup"}>
                                <div className='flex items-center gap-2'>
                                    Explore Full catalog
                                    <FaArrowRightLong />
                                </div>
                            </HomeButton>
                            <HomeButton active={false} linkto={"/signup"}>
                                <div className='flex items-center gap-4'>
                                    Learn More
                                </div>
                            </HomeButton>
                        </div>
                    </div>
                </div>


                <div className='mx-auto w-11/12 max-w-maxContent flex flex-col justify-between items-center gap-8    '>

                    {/* first  */}
                    <div className='flex w-11/12  flex-row justify-center mb-4 mt-[90px] gap-5'>
                        {/* chota pahla  */}
                        <div className='text-4xl font-bold w-[40%]'>
                            <h1>Get the skills you need for a <HighlightText text={"job that is in demand."} /></h1>
                        </div>
                        {/* chota dusra  */}
                        <div className='flex flex-col gap-6 w-[40%] items-start'>
                            <div className='text-[18px]'>
                                <p>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
                            </div>

                            <HomeButton className="h-[15px] w-4" active={true} linkto={"/signup"}>
                                <div >Learn More</div>

                            </HomeButton>

                        </div>
                    </div>
                   
                    <LearningLangSection />


                </div>

               
            </div>
            {/* section 3 */}
            <div className='mx-auto  flex flex-col justify-evenly items-center text-white   '>
            <BecomeanInstructor/>
            {/* <Testimonial/> */}
            </div>
            

            {/* Footer  */}
            <Footer/>
            {/* <Footer/> */}

        </div>
    )
}

export default Home
