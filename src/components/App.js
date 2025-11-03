
import React from "react";
import './../styles/App.css';
import TodoList from "./TodoList";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React:", completed: false },
    { id: 2, text: "Build a React app:", completed: false },
    { id: 3, text: "Deploy the React app:", completed: false },
  ]);

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos); // update the state
  };
  
  return (
    <div style={{ padding: "20px" }}>
      <h1>Parent Component</h1>
      <h2>Child Component</h2>
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  )
}

export default App;
