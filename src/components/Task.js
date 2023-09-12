import React, { useEffect, useState } from "react";
import "../assets/styles/task.css";

export const Task = ({ task, createTask, closeTask, updateTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  useEffect(() => {
    if (task) {
      setTaskName(task.name || "");
      setTaskDescription(task.description || "");
    }
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
        <div className="modal-box">
          <div className="modal-header">
            <h2 className="font-bold text-lg">
              {!task ? "Add Task" : "Update Task"}
            </h2>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeCreateTask}
            >
              X
            </button>
          </div>
          <div className="form-control w-full max-w-xs">
            <form>
              <label className="label" htmlFor="taskName">
                <span className="label-text">Name:</span>
              </label>

              <div>
                <input
                  className="input input-bordered w-full max-w-xs"
                  id="taskName"
                  type="text"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
              </div>
              <label className="label" htmlFor="taskDescription">
                <span className="label-text">Description:</span>
              </label>
              <textarea
                className="textarea textarea-bordered textarea-md w-full max-w-xs"
                id="taskDescription"
                type="text"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
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
    </div>
  );
};
