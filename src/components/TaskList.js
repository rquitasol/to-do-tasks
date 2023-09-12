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
    <tr onClick={openTask}>
      <th>{task.name}</th>
      <th>
        {task.description.length >= 10
          ? task.description.slice(0, 10)
          : task.description}
      </th>
      <th>
        <button className="btn btn-xs" onClick={(e) => handleButtonClick(e)}>
          X
        </button>
      </th>
    </tr>
  );
};
