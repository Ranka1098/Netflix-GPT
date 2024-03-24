import React from "react";
import { RouterProvider } from "react-router-dom";
import BodyRouter from "./component/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appstore"

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={BodyRouter} />
      </Provider>
    </div>
  );
};

export default App;
