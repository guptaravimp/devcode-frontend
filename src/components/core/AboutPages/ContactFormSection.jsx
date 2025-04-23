import React from 'react'
import ContactForm from '../../ContactPage/ContactForm'
function ContactFormSection() {
  return (
    <div className='mx-auto w-[80%] flex-col justify-center items-center'>
       <h1  className="text-center text-4xl font-semibold">Get In Touch</h1>
       <p className="text-center text-richblack-300 mt-3">We’d love to here for you, Please fill out this form.</p>
       
       <div className="mt-12 mx-auto"><ContactForm/>
        </div>
    </div>
  )
}

export default ContactFormSection
