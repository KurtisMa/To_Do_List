import React from "react";

const Todo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div
      id={todo.id}
      onClick={handleClick}
      className={todo.complete ? "strike" : ""}
    >
      {todo.task}
    </div>
  );
};

export default Todo;
