import React from "react";

function TodoList({ todos, onComplete }) {
  const anyCompleted = todos.some(todo => todo.completed);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          {!anyCompleted && (
            <button onClick={() => onComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
