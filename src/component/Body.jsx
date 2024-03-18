import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const BodyLayout = () => {
  return (
    <div>
      <Login />
      <Outlet />
    </div>
  );
};

const BodyRouter = createBrowserRouter([
{
    path:"/",
    element:<BodyLayout />
},
{
    path:"/browse",
    element:<Browse />
}
])

export default BodyRouter;
