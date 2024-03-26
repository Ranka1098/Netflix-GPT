import React from "react";
import logo from "../assets/logo.png";


const Header = () => {
  return (
    <div className="absolute  w-full  bg-gradient-to-b from-black/45 z-10 ">
      
        <img src={logo} alt="logo" className=" w-[150px] " />

     
    </div>
  );
};

export default Header;
