import React, { useEffect, useState } from "react";
import TodoList from "../components/TodoList";

const Todos = (props) => {
  const { todos, createNewTodo, removeItem } = props;

  return (
    <>
      <h1 className="item-container">MY TODOS:</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {todos.length === 0 ? (
          <h4>No Todos Found</h4>
        ) : (
          <TodoList todos={todos} removeItem={removeItem} />
        )}
      </div>
      <button onClick={() => createNewTodo(true)}>Create New Todo</button>
    </>
  );
};

export default Todos;
