import React, { useEffect, useState } from "react";
import { Task } from "./Task";
import { TaskList } from "./TaskList";
import { SearchTask } from "./SearchTask";
import "../assets/styles/task.css";

export const ToDoComponent = () => {
  const [storedTasks, setStoredTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState({});

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

  const openCreateTask = (isOpen) => {
    setIsModalOpen(isOpen);
    setTask(null);
  };

  const closeTask = () => {
    setIsModalOpen(false);
  };

  const createTask = (newTask) => {
    const updatedStoredTasks = [...storedTasks, newTask];
    setStoredTasks(updatedStoredTasks);
    setFilteredTasks(updatedStoredTasks);
  };

  const updateTask = (updatedTask) => {
    const updatedStoredTasks = storedTasks.map((task) => {
      if (task.name === updatedTask.name) {
        task.description = updatedTask.description;
      }
      return task;
    });
    setStoredTasks(updatedStoredTasks);
    setFilteredTasks(updatedStoredTasks);
  };

  const deleteTask = (taskName) => {
    const updatedTasks = storedTasks.filter((task) => task.name !== taskName);
    setStoredTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const openUpdateTask = (task) => {
    setIsModalOpen(true);
    setTask(task);
  };

  return (
    <div>
      <h2>Search</h2>
      <SearchTask
        filteredTasks={filteredTasks}
        setFilteredTasks={setFilteredTasks}
        openCreateTask={openCreateTask}
        storedTasks={storedTasks}
      />
      {isModalOpen && (
        <Task
          isModalOpen={isModalOpen}
          task={task}
          createTask={createTask}
          closeTask={closeTask}
          updateTask={updateTask}
        />
      )}
      <div>
        <h2>Task List</h2>
        <ul>
          {filteredTasks.map((task, idx) => (
            <TaskList
              key={idx}
              task={task}
              deleteTask={deleteTask}
              openUpdateTask={openUpdateTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
