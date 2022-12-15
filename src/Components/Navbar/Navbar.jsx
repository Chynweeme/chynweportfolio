import React from 'react'
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className='navbar flex w-full p-5 shadow '>
      <div className="heading ml-2 text-white">Chynwe</div>
      <ul className="menu-items hidden lg:flex w-3/4">
        <li><a href="#" className='active bg-red'>Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="hamburger block lg:hidden text-white">Ham</div>
      <div className="sidepanel block lg:hidden w-1/2 flex">
        <div className='hidden'>
          <ul className='py-3 px-10 border'><a href="#">Home</a></ul>
          <ul className='py-3 px-10 border'><a href="#">About</a></ul>
          <ul className='py-3 px-10 border'><a href="#">Projects</a></ul>
          <ul className='py-3 px-10 border'><a href="#">Contact</a></ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
