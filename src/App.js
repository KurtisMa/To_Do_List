import React, { useState } from "react";
import "./styles.css";
import Header from "./Header.js";
import data from "./data.json";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  const [todoList, setTodoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = todoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodoList(mapped);
  };

  const handleDelete = () => {
    let filtered = todoList.filter((task) => {
      return !task.complete;
    });
    setTodoList(filtered);
  };

  const handleClear = () => {
    let cleared = [...todoList];
    cleared.length = 0;
    setTodoList(cleared);
  };

  const addTask = (userInput) => {
    let copy = [...todoList];
    copy = [
      ...copy,
      { id: todoList.length + 1, task: userInput, complete: false }
    ];
    setTodoList(copy);
  };

  return (
    <div className="App">
      <Header />
      <TodoList
        todoList={todoList}
        handleToggle={handleToggle}
        handleClear={handleClear}
        handleDelete={handleDelete}
      />
      <TodoForm addTask={addTask} />
    </div>
  );
}

export default App;
