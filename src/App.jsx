import React from "react";
import { RouterProvider } from "react-router-dom";
import BodyRouter from "./component/Body";

const App = () => {
  return (
    <div>
     <RouterProvider router={BodyRouter } />
    </div>
  );
};

export default App;
