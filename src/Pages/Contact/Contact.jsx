import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-heading text-white my-10 text-center">Contact</div>
        <div className='contact-detail flex text-white'>
            <div className='left-side w-1/2 flex justify-center my-auto text-2xl'>
                Wanna chat? Here are my details:
            </div>

            <div className='right-side w-1/2'>
                <div className='right-details border border-white mx-auto mb-4 text-center'>
                    <p className='mt-6 mb-3'>Phone:</p> <p>+2348130305905</p> 
                    <p className='mt-6 mb-3'>Email:</p> <p>echinwenduvictoriae@gmail.com</p>
                    <p className='mt-6 mb-3'>LinkedIn:</p> <a href="https://linkedin.com/in/chinwenduemenike">linkedin.com/in/chinwenduemenike</a> 
 

                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact





