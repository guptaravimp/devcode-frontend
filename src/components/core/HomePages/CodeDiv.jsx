import HomeButton from './HomeButton'
import { FaArrowRightLong } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
function CodeDiv({ position, heading, subheading, btn1, btn2, codeblock, codeColor }) {
    
    return (
        <div className={`flex ${position} justify-between gap-8`}>
            {/* section 1  */}
            <div className='w-[50%] flex flex-col gap-6 mt-1'>
                {heading}
                {subheading}
                <div className='text-richblack-300 flex gap-2 font-bold'>
                    <HomeButton active={btn1.active} linkto={btn1.link} >
                        <div className='flex gap-1 items-center '>{btn1.btntext} <FaArrowRightLong /></div>

                    </HomeButton>
                    <HomeButton active={btn2.active} linkto={btn2.link}>
                        <div className='flex gap-2 items-center'>{btn2.btntext}</div>
                    </HomeButton>
                </div>
            </div>
   {/* code block  */}
            <div className='flex h-fit w-[100%] p-2 lg:w-[500px]  glass'>
                <div className=' text-center w-[10%] flex flex-col text-richblack-400 font-inter'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                </div>
                <div  className={`  w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} `}>
                  <TypeAnimation
                      sequence={[codeblock, 2000, ""]}
                      repeat={Infinity}
                      cursor={true}
                      omitDeletionAnimation={true}
                      style={{
                        whiteSpace: "pre",
                        display: "block"
                      }}
                  
                  />

                </div>


            </div>
        </div>
    )
}

export default CodeDiv
