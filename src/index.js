import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

import { Provider } from "./context/context";

//using the react render DOM to maintain the root elements
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
