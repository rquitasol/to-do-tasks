import React, { useEffect, useState } from "react";
import { CreateTask } from "./CreateTask";
import { Task } from "./Task";
import { SearchTask } from "./SearchTask";
export const ToDoComponent = () => {
  const [storedTasks, setStoredTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Render previous tasks saved in storage
  useEffect(() => {
    const localStorageTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setStoredTasks(localStorageTasks);
    setFilteredTasks(localStorageTasks);
  }, []);

  // Store tasks after render
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }, [storedTasks]);

  const createTask = (newTask) => {
    const updatedStoredTasks = [...storedTasks, newTask];
    setStoredTasks(updatedStoredTasks);
    setFilteredTasks(updatedStoredTasks);
  };

  const removeTask = (taskName) => {
    const updatedTasks = storedTasks.filter((task) => task.name !== taskName);
    setStoredTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  return (
    <div>
      <SearchTask
        filteredTasks={filteredTasks}
        setFilteredTasks={setFilteredTasks}
      />
      <CreateTask createTask={createTask} />
      <div>
        <h1>Task List</h1>
        <div>
          <ul className="tasks">
            {filteredTasks.map((task, idx) => (
              <Task key={idx} task={task} removeTask={removeTask} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
