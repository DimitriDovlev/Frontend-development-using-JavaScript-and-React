const express = require("express");
const { v4: uuid } = require("uuid");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let todos = [
  {
    id: uuid(),
    text: "Learn React",
    color: "Red",
  },
];

app.get("/all", (req, res) => {
  res.status(200).json(todos);
});

app.post("/create", (req, res) => {
  console.log(req.body);
  const newTodo = req.body;
  const id = uuid();
  todos.push({
    ...newTodo,
    id,
  });
  console.log(todos);
  res.status(201).json(id);
});

app.delete("/remove/:id", (req, res) => {
  const id = req.params.id;
  const filteredTodos = todos.filter((todo) => todo.id !== id);
  todos = [...filteredTodos];
  res.status(200).json({ success: true });
});

// app.patch("/update/:id", (req, res) => {
//   const id = req.params.id;
//   const item = req.body;
//   const updatedTodo = todos.findIndex((item) => item.id === id);
//   console.log(JSON.stringify(updatedTodo));
//   if (!updatedTodo) throw new Error("Item does not exist");

//   todos[updatedTodo] = {
//     ...todos[updatedTodo],
//     ...item,
//   };
//   console.log(todos[updatedTodo]);

//   res.status(200).send(todos[updatedTodo]);
// });

app.patch("/update/:id", (req, res) => {
  const id = req.params.id;
  const todoUpdates = req.body;

  if (todoUpdates.id) res.sendStatus(403);

  const foundTodo = todos.find((todo) => todo.id === id);

  if (!foundTodo) return res.status(404).json({ msg: "Item not found" });

  const updatedTodo = { ...foundTodo, ...todoUpdates };

  const updatedTodos = todos.map((todo) =>
    todo.id === id ? updatedTodo : todo
  );

  todos = [...updatedTodos];
  console.log(todos);

  res.status(200).json(updatedTodos);
});

app.listen(4000);
