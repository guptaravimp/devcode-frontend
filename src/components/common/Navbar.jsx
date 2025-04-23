import { Link, matchPath } from 'react-router-dom'
import devcodelogo1 from "../../assets/Images/devcodelogo1.png"
// import devcode2 from "../../assets/Logo/devcode2.png"
import { TiShoppingCart } from "react-icons/ti";

import { NavbarLinks } from '../../data/navbar-links'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { FaCartArrowDown } from "react-icons/fa";
import { apiconnector } from '../../services/apiconnector';
import { categoriesendpoints } from '../../services/apis'
import { IoIosArrowDown } from "react-icons/io";
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { useEffect, useState } from 'react'
function Navbar() {
  // fetching all the reducer slice 
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  // const totalItems = useSelector((state) => state.cart);
  const location = useLocation();

  const {totalItems}=useSelector((state)=>state.cart)
  // //  for operation folder call backend api call 
  const [subLinks, setSubLinks] = useState([]);
  const fetchSublinks = async () => {
    try {
      console.log("Mai to chala hu ")
      const result = await apiconnector("GET", categoriesendpoints.CATEGORIES_API);
      console.log("Printing Sublinks data ", result)
      // setSubLinks(result.data.data)
       
      setSubLinks(result?.data?.allTags || []);

    } catch (error) {
      console.log("Cannot fetch the categories list")
      setSubLinks([]);
    }
  }
  useEffect(() => {
    fetchSublinks()
  }, [])




  const matRoutes = (route) => {
    return matchPath({ path: route }, location.pathname);
  }
  return (
    <div className='bg-richblack-900 w-screen flex h-16 items-center justify-center border-b-[1px] border-2 top-0 sticky z-50 border-b-richblack-700  '>

      <div className='Navigationhai flex w-11/12 max-w-maxContent justify-between items-center  text-white mt-2'>
        <div className='flex justify-evenly items-center gap-4'>
          <Link to="/">
            <img src={devcodelogo1} className='rounded-3xl h-[75px] w-[240px] p-1' alt="" />
           
          </Link>
        </div>


        {/* Nav Links  */}
        <nav className='Navwalalink '>
          <ul className='flex justify-between gap-x-6 text-richblack-25'> {
            NavbarLinks.map((links, index) => (
              <li key={index} className='text-[18px]'>
                {
                  links.title === 'Catalog' ? (
                    <div className="relative flex justify-between items-center group cursor-pointer">

                      <p>{links.title}</p>
                      <span className="ml-1 text-xl">
                        <IoIosArrowDown className="group-hover:hidden block" />
                        <IoIosArrowUp className="group-hover:block hidden" />
                      </span>



                      <div className='invisible absolute left-[50%] 
                        translate-x-[-35%] translate-y-[8%] 
                        top-[10%] flex flex-col rounded-md bg-richblack-5 p-4 z-20 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[180px] cursor-pointer'>
                        <div className='absolute left-[50%] top-0 h-6 w-8 rotate-45 rounded bg-richblack-5'></div>
                        {/* {
                          // console.log("SubLinks are ",subLinks)
                          subLinks.length > 0 ? (
                            subLinks.map((subLink, index) => (
                              <Link to={`${subLink.link}`} key={subLink.id || index}>
                                {subLink.name}
                              </Link>
                            ))



                          ) : <div></div>
                        } */}
                         {
                                    subLinks?.length < 0 ? (<div></div>) : (
                                        subLinks?.map((element, index) => (
                                            <Link to={`/catalog/${element?.name}`} key={index}  className="p-2 text-md">
                                                <p className=' text-richblack-700 hover:bg-richblack-300 p-2 rounded-xl'>
                                                    {element?.name}
                                                </p>
                                            </Link>
                                        )))
                                }
                      </div>

                    </div>



                  ) : (
                    <Link to={links?.path}>
                      <p className={`${matRoutes(links?.path) ? "text-yellow-25" : "text-richblack-25"}`}>{links.title}</p>
                    </Link>
                  )
                }

              </li>
            ))
          }
          </ul>
        </nav>

        {/* Login/Signup?dashboard  */}
        <div className='flex gap-4 justify-center items-center'>

        {
                        user && user?.accountType !== "Instructor" && (
                            <Link to='/dashboard/cart' className=' relative px-4 ' onClick={() => { dispatch(setProgress(100)) }} >
                                <div className='  z-50'>
                                    <TiShoppingCart className=' fill-richblack-25 w-7 h-7' />
                                </div>
                                {
                                    totalItems > 0 && (
                                        <span className=' shadow-sm shadow-black text-[10px] font-bold bg-yellow-100 text-richblack-900 rounded-full px-1 absolute -top-[2px] right-[8px]'>
                                            {totalItems}
                                        </span>
                                    )
                                }

                            </Link>
                        )
                    }
          {
            token === null && (
              <Link to="/login">
                <button className='border border-richblack-700 px-3   p-1 rounded  bg-richblack-800'>
                  Login</button>
              </Link>

            )
          }
          {
            token === null && (

              <Link to="/signup">
                <button className='border border-richblack-700 px-3   p-1 rounded  bg-richblack-800'>
                  Signup</button>
              </Link>
            )
          }
          {/* {
            token !== null && 
            <div className='border-2 border-pink-5  ' >
            <ProfileDropDown />
              </div>
          } */}
          {
            token !== null && (
              <div className=' pt-2' >
                <ProfileDropDown />
              </div>
            )
          }

        </div>





      </div>
    </div>
  )
}

export default Navbar
