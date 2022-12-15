import React from 'react'
import "./About.css"


const About = () => {
  return (
    <div className='about-wrapper text-white'>
        <div className='about-heading my-10 text-center'>About Me</div>
        <div className='about-subheading pb-10'>
            <div className='mx-5 about-writeup'>Hello, I am Chynwe, and I am passionate
             about building things for the web. I started my journey into tech as a Product
             Designer, where I learnt how to use Figma to design an prototype mobile and web apps. 
             However, my love for math and analysis drew me to Software Development. I started with
             HTML, CSS and JavaScript and I was hooked for life! I then progressed to React Js and learnt
             how to build interactive user interfaces and web applications. I also learnt how to use Node.Js


            <br /> <br />
            In the years, I have cultivated my passion for coding by studying how humans think, behave, and how they solve their problems. This 
            gives me an insight on how to deliver world class apps that is not only eye-catching, but useful to the end users.

            I am now looking for a junior dev position to finally kick start my career and learn among professionals.”  
            
            </div>
            
            
            <div className='image mx-auto flex justify-evenly'>
                <img src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGphdmFzY3JpcHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className='w-1/3' />
                <img src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGphdmFzY3JpcHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className='w-1/3'/>
            </div>
        </div>
    </div>
  )
}

export default About