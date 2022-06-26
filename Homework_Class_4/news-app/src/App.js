import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=002cc7173b8146a59e1fc098d1ca4fd3"
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div>
      <div className="row .container">
        <Card items={items} />
      </div>
    </div>
  );
}

export default App;
