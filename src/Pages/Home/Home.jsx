import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='home bg-opacity-1 '>
      <div className='bg-black overlay'></div>
      <p className='intro text-white z-10 flex'> Hi! I'm Chynwe, and I'm a Software Developer 
      <button>Contact me!</button>
      </p> 
      {/* <button>Contact me!</button> */}
    </div>
  )
}

export default Home
