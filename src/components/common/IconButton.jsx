import React from 'react'

function IconButton({text,  onclick, children, disabled, outline, customClasses, type}) {
    // console.log("kaha hi bhia test ",text)
    return (
        <div className='  '>
            <button className='bg-yellow-100 text-richblack-700 font-bold h-10 rounded  flex justify-around items-center w-16'  onClick={onclick} type={type}>
                {
                    children ? (
                        <>
                            <span>
                                {text}
                            </span>
                            {children}

                        </>
                    ) : (text)
                }
            </button>
        </div>
    )
}

export default IconButton
