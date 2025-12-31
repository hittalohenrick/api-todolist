const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];
let nextId = 1;

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: "Tarefa não encontrada" });
  }
});

app.post("/tasks", (req, res) => {
  const { title } = req.body;
  const newTask = { id: nextId++, title };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put("/tasks/:id", (req, res) => {
  const { title } = req.body;
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (task) {
    task.title = title;
    res.json(task);
  } else {
    res.status(404).json({ error: "Tarefa não encontrada" });
  }
});

app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
