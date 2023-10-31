import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
      }}
    >
      <br></br>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter ToDo here:"
      />
      <button> Submit </button>
    </form>
  );
};

export default TodoForm;
