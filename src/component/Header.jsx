import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        console.log(user);
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // this will called unsubcribe whhen component unmounts
    return ()=> unsubscribe();
  }, []);

  return (
    <div className="absolute  w-full  bg-gradient-to-b from-black/45 z-10 ">
      <img src={logo} alt="logo" className=" w-[150px] " />
    </div>
  );
};

export default Header;
