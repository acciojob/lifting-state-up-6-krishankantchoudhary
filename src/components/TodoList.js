import React from "react";

function TodoList({ todos, onComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}{" "}
          {!todo.completed ? (
            <button data-testid={`btn-${todo.id}`} onClick={() => onComplete(todo.id)}>
  Complete
</button>
          ) : (
            // ✅ Add this replacement text so Cypress knows the UI updated
            <span data-testid={`todo-${todo.id}`}>✅ Completed</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
