import React from 'react'
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className='absolute mx-[10rem] my-[1rem] bg-gradient-to-b from-black/45 z-10 '>
        <img src={logo} alt="logo"
        className=' w-[200px] ' />
    </div>
  )
}

export default Header