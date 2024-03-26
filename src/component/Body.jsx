import React, { useEffect } from "react";
import { Outlet, createBrowserRouter, useNavigate } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { addUser, removeUser } from "../utils/UserSlice";

const BodyLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName ,photoURL} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL}));
        console.log(user);

      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <Login />
      <Outlet />
    </div>
  );
};

const BodyRouter = createBrowserRouter([
  {
    path: "/",
    element: <BodyLayout />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default BodyRouter;
