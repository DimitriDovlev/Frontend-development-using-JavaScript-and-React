import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Custom from "./pages/Custom";
import Counter from "./pages/Custom2";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <>
    <App />
    <Custom />
    <Counter />
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
