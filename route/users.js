const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
let tasks = [];
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = req.body; 
  tasks.push(newTask);   
  res.status(201).json({ message: 'Tâche ajoutée !', task: newTask });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
