import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, handleDelete, handleToggle, handleClear }) => {
  return (
    <div>
      <ol>
        {todoList.map((todo, index) => {
          return (
            <li key={index}>
              <Todo
                todo={todo}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
                handleClear={handleClear}
              />
            </li>
          );
        })}
      </ol>

      <button onClick={handleDelete}> Remove Finished Tasks </button>
      {"\n"}
      <button onClick={handleClear}> Clear </button>
    </div>
  );
};

export default TodoList;
