import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const handleToggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    console.log(isSignIn);
  };
  return (
    <div className="relative w-screen h-screen">
      {/* logo */}
      <Header />
      {/* img in back ground */}
      <div className="w-full absolute  bg-cover bg-center bg-no-repeat bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg)]">
        <div className=" relative w-full h-screen bg-black/50"></div>
      </div>
      {/* login form*/}
      <div className="absolute w-3/12 p-5 bg-black bg-opacity-80 rounded-md mx-auto left-0 right-0 top-[20%] text-white">
        <form className="flex flex-col  gap-3 ">
          <h1 className="text-3xl">{isSignIn ? "SignIn" : "SignUp"}</h1>
          {!isSignIn && (
          <input
          type="text"
          placeholder="Full Name of user"
          className="my-1 bg-gray-600 px-1 py-2"
        />)}
          <input
            type="email"
            placeholder="Email Here..."
            className="my-1 bg-gray-600 px-1 py-2"
          />
          <input
            type="password"
            placeholder="password here..."
            className="my-1 bg-gray-600 px-1 py-2"
          />
          <p>
            <input type="checkbox" className="cursor-pointer" /> Remember me
          </p>
          <button
            className="bg-[#E50914] rounded-md py-2 my-3"
          >
            {isSignIn ? "SignIn" : "SignUp"}
          </button>
          <p className="text-center text-sm -mt-3">
            {" "}
            <a href="#" className="hover:underline duration-300">
              {" "}
              Forget Password ?
            </a>{" "}
          </p>
          <p
            className="px-1 mt-1 cursor-pointer hover:underline duration-200"
            onClick={handleToggleSignInForm}
          >
            {isSignIn
              ? "New To NetFlix? SignUp now"
              : " already registered SignIn Now..."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
