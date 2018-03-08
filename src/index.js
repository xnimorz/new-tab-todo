import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import "./style.css";

import configureStore from "./store/configureStore";

import App from "./container/App";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
