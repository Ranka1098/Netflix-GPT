import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/UserSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div>
      <div className="w-screen flex justify-between ">
        <div>
          <Header />
        </div>

        <div className="mr-[5rem] my-3 flex  gap-2 items-center cursor-pointer z-[10]">
            <img src={user?.photoURL} alt="" />
          <button
            className=" bg-red-600 px-2 py-1 rounded-md "
            onClick={handleSignout}
          >
            SignOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Browse;
