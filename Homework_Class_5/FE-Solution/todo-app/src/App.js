import "./App.css";
import Todos from "./pages/Todos";
import React, { useState, useEffect } from "react";
import CreateTodo from "./pages/CreateTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [createTodo, setCreateTodo] = useState(false);

  const createNewTodo = (value) => {
    setCreateTodo(value);
  };

  const insertNewTodo = async (text, color) => {
    const newTodoID = await fetch("http://localhost:4000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        color,
      }),
    });
    setTodos([...todos, { id: newTodoID, text, color }]);
    //TOAST
  };

  const removeItem = async (id) => {
    await fetch(`http://localhost:4000/remove/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter((todo) => todo.id !== id));
    //TOAST
  };

  const updateItem = async (todo) => {
    // const todoUpdate =
    await fetch(`http://localhost:4000/update/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(todo);
    setTodos({ ...todos, [todo.id]: todo });
  };

  useEffect(() => {
    fetch("http://localhost:4000/all")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        console.log(err);
        //TOAST
      });
  }, []);

  return (
    <div className="App">
      {!createTodo ? (
        <Todos
          todos={todos}
          createNewTodo={createNewTodo}
          removeItem={removeItem}
          updateItem={updateItem}
        />
      ) : (
        <CreateTodo
          createNewTodo={createNewTodo}
          insertNewTodo={insertNewTodo}
        />
      )}
      {/* <Todos /> */}
    </div>
  );
}

export default App;
