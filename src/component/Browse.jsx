import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/UserSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
const Browse = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

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
  return (
    <div>
      <div className="w-screen flex justify-between ">
        <div>
          <Header />
        </div>

        <div className="mr-[5rem] my-3 flex  gap-2 items-center cursor-pointer z-[10]">
          <img
            src="https://images.unsplash.com/photo-1514978317271-63c845d39beb?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // src={user?.photoURL}
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
      </div>
    </div>
  );
};

export default Browse;
