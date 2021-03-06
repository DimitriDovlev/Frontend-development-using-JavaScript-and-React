import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const generateTime = () => {
  const element = (
    <div>
      <h2>Hello World</h2>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );

  ReactDOM.render(element, document.getElementById("root"));
};

//setInterval(generateTime, 1000);
const firstName = "Name1";
const lastName = "Lastname1";

ReactDOM.render(
  <App name={firstName} secondName={lastName} />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();