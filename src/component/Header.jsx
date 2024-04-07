import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { ToogleGptSearch } from "../utils/GptSlice";
import { Supported_lang } from "../utils/constant";
import Lang from "../utils/LanguageConstant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const gpt = useSelector((store) => store.gpt);

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

  // -------------gpt search function ---------
  const handleSearchGpt = () => {
    dispatch(ToogleGptSearch());
  };

  // -------------gpt search function ---------

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute  w-full flex justify-between bg-gradient-to-b from-black/45 z-10 ">
      <img src={logo} alt="logo" className=" w-[150px] " />

      {user && (
        <div className="mr-[5rem] my-3 flex  gap-4 items-center cursor-pointer z-[10]">
          {/* lanugae dropdown */}
          <select
            className="p-2 -mr-2 rounded-lg bg-gray-400"
            onChange={handleChangeLanguage}
          >
            {/* <option value="en">English</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">spanish</option> */}

            {Supported_lang.map((lang) => (
              <option key={lang.identifire} value={lang.identifire}>
                {lang.name}
              </option>
            ))}
          </select>
          {/* lanugae dropdown */}

          <button
            className="px-4 py-2 bg-purple-700 text-white text-xl rounded-lg"
            onClick={handleSearchGpt}
          >
            GPT Search
          </button>
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
