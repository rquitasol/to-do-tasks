import React from "react";

export const TaskList = ({ task, deleteTask, openUpdateTask }) => {
  const handleClick = () => {
    deleteTask(task.name);
  };

  const openTask = () => {
    openUpdateTask(task);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    handleClick();
  };

  return (
    <li onClick={openTask}>
      {JSON.stringify(task)}
      <button className="btn" onClick={(e) => handleButtonClick(e)}>
        x
      </button>
    </li>
  );
};
