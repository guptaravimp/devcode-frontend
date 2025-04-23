import React from 'react'
import Templates from '../components/core/Auth/Templates'
import signupimg from '../assets/Images/signup.webp'
import SignupForm from '../components/core/Auth/SignupForm'
import { useSelector } from 'react-redux'
function Signup() {
  const {loading}=useSelector((state)=>state.auth)
  return (
    <div  className='w-screen  border-2  flex justify-center items-center'>
      {
        loading?( <div class="spinner"></div>):(<Templates
          title="Join the millions learning to code with StudyNotion for free"
          description1="Build skills for today, tomorrow, and beyond."
          description2="Education to future-proof your career."
          image={signupimg}
          formType="signup"
          />)
      }
        
         {/* <SignupForm/> */}
     
    </div>
  )
}

export default Signup
