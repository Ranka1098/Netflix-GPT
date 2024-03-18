import React from 'react'
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className='absolute mx-[10rem] my-[1rem]  z-10 '>
        <img src={logo} alt="logo"
        className=' w-[200px] ' />
    </div>
  )
}

export default Header