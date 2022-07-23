import React, { useState, useEffect } from "react";
import "./App.css";
import useFetchAsync from "./hooks/useFetchAsync";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("login");

  return (
    <div>
      <div>
        <button onClick={() => setSelectedTab("login")}>LOGIN</button>
        <button onClick={() => setSelectedTab("home")}>HOME</button>
      </div>
      {selectedTab === "login" ? <Login /> : <Home />}
    </div>
  );
};

const Home = () => {
  return <div>Home</div>;
};

const Login = (props) => {
  const [firstName, setFirstName] = useState("");
  const [userPass, setUserPass] = useState("");

  const [peopleData, setPeopleData, isLoading] = useFetchAsync(
    "https://swapi.dev/api/people/",
    {}
  );

  console.log(peopleData);

  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      {peopleData.results &&
        peopleData.results.map((person, i) => <div key={i}>{person.name}</div>)}
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <input
        type="password"
        onChange={(e) => setUserPass(e.target.value)}
        value={userPass}
      />
    </div>
  );
};

export default App;
