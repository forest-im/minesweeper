import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./container/App";
import store from "./redux/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
