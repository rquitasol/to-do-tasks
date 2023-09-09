import React from "react";

export const Task = (props) => {
  const { task, removeTask } = props;

  const handleClick = () => {
    removeTask(task.name);
  };

  return (
    <li>
      {JSON.stringify(task)}
      <button onClick={() => handleClick()}>X</button>
    </li>
  );
};
