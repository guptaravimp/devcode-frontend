import React from 'react'
import { Link } from 'react-router-dom'

function HomeButton({children,active,linkto}) {
  return (
    <Link to={linkto}>
       <div className= {` border  font-bold rounded-md text-center text-[15px] px-6 py-4 ${active ? "bg-yellow-50 text-black":"bg-richblack-800" }
       hover:scale-95 transition-all duration-100` }>
              {children}
       </div>
    </Link>
 
  )
}

export default HomeButton
