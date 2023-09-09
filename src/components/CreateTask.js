import React, { useState } from "react";

export const CreateTask = ({ createTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) {
      alert("Fill in everything!");
    } else {
      createTask({ name: taskName, description: taskDescription });
    }

    setTaskName("");
    setTaskDescription("");
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form>
        <label htmlFor="taskName" style={{ display: "block" }}>
          Name:
        </label>
        <input
          id="taskName"
          name="taskName"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <br />
        <label htmlFor="taskDescription" style={{ display: "block" }}>
          {" "}
          Description:
        </label>
        <textarea
          id="taskDescription"
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          rows="10"
          cols="50"
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};
