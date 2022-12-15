import React from 'react'
import "./Project.css"

const Project = () => {
  return (
    <div>
    <div className='text-white text-center py-10 project-heading'>Projects</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <a href="#">
            <img src="https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGphdmFzY3JpcHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </a>
        <a href="#">
            <img src="https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGphdmFzY3JpcHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </a>
        <a href="#">
            <img src="https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGphdmFzY3JpcHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </a>
        
    </div>
    </div>
    
  )
}

export default Project