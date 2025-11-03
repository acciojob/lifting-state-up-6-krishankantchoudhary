import React from "react";

function TodoList({ todos, onComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          
          { !todo.completed ? (
            <button onClick={() => onComplete(todo.id)}>Complete</button>
          ) : (
             <span></span>
           )} 
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
