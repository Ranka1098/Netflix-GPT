import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/Validate";
import netflix from "../assets/netflix.jpg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [passShow, setPassShow] = useState(false);
  const [errMessage, setErrMessage] = useState();

  const email = useRef(null);
  const password = useRef(null);

  const handleClicked = () => {
    //validate the form
    const message = checkValidate(email.current.value, password.current.value);
    // const validEmail = checkValidate(email.current.value);
    // const validPassword = checkValidate(password.current.value);
    // // console.log(email.current.value);
    // console.log(password.current.value);
    setErrMessage(message)
    
  };

  const handleToggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="relative w-screen h-screen">
      {/* logo */}
      <Header />
      {/* img in back ground */}
      <div className="w-full absolute  bg-cover bg-center bg-no-repeat ">
        <img alt="" src={netflix} />
      </div>
      {/* login form*/}
      <div className="absolute w-3/12 p-5 bg-black bg-opacity-80 rounded-md mx-auto left-0 right-0 top-[16%] text-white">
        <form
          className="flex flex-col  gap-3 "
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-3xl">{isSignIn ? "SignIn" : "SignUp"}</h1>
          {!isSignIn && (
            <div>
              <label>UserName</label>
              <input
                type="text"
                placeholder="Full Name of user"
                className=" bg-gray-600 px-3 py-2 flex flex-col w-full"
              />
            </div>
          )}
          {/* email */}
          <label>Email</label>
          <input
            ref={email}
            type="email"
            autoComplete=""
            placeholder="Email Here..."
            className="-mt-3 bg-gray-600 px-3 py-2 "
          />

          {/* password */}
          <label>password</label>
          <input
            ref={password}
            type={passShow ? "password" : "text"}
            autoComplete="current-password"
            placeholder="password here..."
            className="-mt-3 bg-gray-600 px-3 py-2"
          />
          {/* 
          <button
            onClick={() => setPassShow(!passShow)}
            className="absolute right-10 top-[45%]"
          >
            {passShow ? <FaEyeSlash /> : <FaEye />}
          </button> */}

          <p>
            <input type="checkbox" className="cursor-pointer" /> Remember me
          </p>
          <p className="text-red-600 text-mmd">{errMessage}</p>
          <button
            className="bg-[#E50914] rounded-md py-2 -mt-2 my-1"
            onClick={handleClicked}
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
          <div
            className="px-1 mt-1 cursor-pointer "
            onClick={handleToggleSignInForm}
          >
            {isSignIn ? (
              <div>
                <span className="text-sm">
                  "New To NetFlix?{" "}
                  <span className="text-md font-semibold text-blue-600 hover:underline duration-200">
                    SignUp Now
                  </span>
                  "
                </span>
              </div>
            ) : (
              <div>
                <span className="text-sm">
                  Allready registred{" "}
                  <span className="text-md font-semibold text-blue-600 hover:underline duration-200">
                    SignIn Now
                  </span>
                  "
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
