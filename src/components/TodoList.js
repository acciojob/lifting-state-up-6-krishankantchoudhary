import React from "react";

function TodoList({ todos, onComplete }) {

  // Check if ANY todo is completed
  const anyCompleted = todos.some(todo => todo.completed);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}

          {/* If ANY todo is completed, hide ALL buttons */}
          {!anyCompleted && (
            <button onClick={() => onComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
