import React, { useEffect, useState } from "react";
import { AddTask } from "./AddTask";

export const ToDoComponent = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("storedTasks", storedTasks);
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const handleClick = (name) => {
    const taskArr = tasks.filter((task) => {
      return task.name !== name;
    });
    setTasks(taskArr);
  };

  const taskList = tasks.map((task, idx) => {
    const name = task.name;
    const description = task.description;

    return (
      <li key={name} id={name} value={name}>
        {JSON.stringify(task)}
        <button onClick={() => handleClick(name)}>X</button>
      </li>
    );
  });

  return (
    <div>
      <AddTask addTask={addTask} />
      <div>
        <h1>Task List</h1>
        <div>
          <ul>{taskList}</ul>
        </div>
      </div>
    </div>
  );
};
