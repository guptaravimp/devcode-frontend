import React from 'react'
import * as Icons from "react-icons/vsc"
import { useDispatch } from 'react-redux';
import { matchPath, NavLink, useLocation } from 'react-router-dom';
import { IoSettings } from "react-icons/io5";
function SidebarLinks({name,path,iconName}) {
  const Icon = Icons[iconName];

  if (!Icon) {
    console.warn(`Icon "${iconName}" not found in react-icons/vsc`);
    return null; // or some fallback JSX
  }
  

    const location=useLocation(); // to make active backgriound to compare with current location and route
    const dispatch=useDispatch();

    const matchRoute = (route) => {
      return matchPath(route, location.pathname)
  }
    // const handleOnClick=(e)=>{
    //           // backend call 
    // }
  return (
    <NavLink to={path} className={`relative px-8 py-1 text-white font-medium ${matchRoute(path)?" bg-yellow-100 ":"bg-opacity-0"}`}>
       <span className={`absolute left-0 top-0 h-full w-[0.2rem] bg-yellow-400
       ${matchRoute(path)?"opacity-100":"opacity-0"}`}>

       </span>
       <div className='flex items-center gap-x-2'>
        <Icon className="text-lg"/>
        <span>{name}</span>

       </div>
    </NavLink>
  )
}

export default SidebarLinks
