import React, { useEffect, useState } from "react";
import "../assets/styles/task.css";

export const Task = ({ task, createTask, closeTask, updateTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  useEffect(() => {
    setTaskName(task?.name);
    setTaskDescription(task?.description);
  }, [task]);

  const closeCreateTask = () => {
    closeTask();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) {
      alert("Fill in everything!");
    } else {
      if (task) {
        updateTask({ name: taskName, description: taskDescription });
      } else {
        createTask({ name: taskName, description: taskDescription });
      }
    }

    setTaskName("");
    setTaskDescription("");
    closeTask();
  };

  return (
    <div>
      <div className="task-modal">
        <div onClick={closeCreateTask} className="overlay"></div>
        <div className="task-modal-content">
          <button className="btn" onClick={closeCreateTask}>
            x
          </button>
          <h3 className="font-bold text-lg">Add Task</h3>
          <form>
            <label htmlFor="taskName">Name:</label>
            <input
              id="taskName"
              name="taskName"
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <br />
            <label htmlFor="taskDescription"> Description:</label>
            <textarea
              id="taskDescription"
              type="text"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              rows="10"
              cols="10"
            />
            <br />
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              onClick={handleSubmit}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
