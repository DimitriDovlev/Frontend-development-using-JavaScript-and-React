import React, { useState } from "react";
import UpdateTodo from "../pages/UpdateTodo";

const TodoItem = (props) => {
  const { todo, removeItem, updateItem } = props;

  const handleRemoveItem = () => {
    console.log(todo);
    removeItem(todo.id);
  };

  return (
    <>
      <div className="item-container">
        <div style={{ marginRight: "100px" }}>
          <h3 style={{ color: todo.color }}>{todo.text}</h3>
        </div>
        <div className="removeButton" onClick={handleRemoveItem}>
          X
        </div>
        <div
          className="removeButton"
          onClick={() => {
            <UpdateTodo todo={todo} updateItem={updateItem} />;
          }}
        >
          Update
        </div>
      </div>
    </>
  );
};

export default TodoItem;
