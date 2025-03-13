import React, { useState } from "react";
import "./App.css"; // Подключаем стили

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="todo-container">
      <h2>Список задач</h2>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

function TaskInput({ addTask }) {
  const [task, setTask] = useState("");

  function handleAdd() {
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  }

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Новая задача"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Добавить</button>
    </div>
  );
}

function TaskList({ tasks, removeTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task} <button onClick={() => removeTask(index)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
