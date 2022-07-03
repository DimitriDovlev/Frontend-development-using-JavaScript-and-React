import React, { useState } from "react";

const UpdateTodo = (props) => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#000000");
  const { todo, updateItem } = props;

  const handleUpdateItem = async (e) => {
    e.preventDefault();
    console.log(todo);
    await updateItem(todo.id);
  };

  return (
    <>
      <h1>Update Todo</h1>
      <form onSubmit={handleUpdateItem}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="color">Color</label>
        <input
          type="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Update Todo</button>
      </form>
    </>
  );
};

export default UpdateTodo;
