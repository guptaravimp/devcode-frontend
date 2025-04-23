import React from 'react'
import { useSelector } from 'react-redux'
import RenderCartCourses from './RenderCartCourses';
import RenderTotalAmount from './RenderTotalAmount';
export default function Cart(){
    const {total,totalItems}=useSelector((state)=>state.cart);
    console.log("Total is ",total)
    return (
        <div className='text-white'>
           <h1 className="mb-14 text-3xl font-medium text-richblack-5 montserrat">Cart</h1>
           <p className="border-b  border-b-richblack-400 pb-2 font-semibold text-richblack-400 crimson">{totalItems} Courses in Cart</p>
            {
                total>0?(<div>
                      <RenderCartCourses/>
                      <RenderTotalAmount/>
                   
                </div>):( <p>Your cart is Empty</p>
                     )
            }
        </div>
    )
}
