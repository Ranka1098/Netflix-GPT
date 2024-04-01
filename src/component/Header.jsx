import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  // --------logout user from browse page-----------------
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  // --------logout user from browse page-----------------

  //--------- user automatically add and remove in store also know user is logged in or not--------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        // console.log(user);
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // this will called unsubcribe whhen component unmounts
    return () => unsubscribe();
  }, []);
  //--------- user automatically add and remove in store also know user is logged in or not--------

  return (
    <div className="absolute  w-full flex justify-between bg-gradient-to-b from-black/45 z-10 ">
      <img src={logo} alt="logo" className=" w-[150px] " />

      {user && (
        <div className="mr-[5rem] my-3 flex  gap-2 items-center cursor-pointer z-[10]">
          <img
            src={user?.photoURL}
            alt="user Profile picture"
            className="w-10 h-10"
          />
          <button
            className=" bg-red-600 px-2 py-1 rounded-md "
            onClick={handleSignout}
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
