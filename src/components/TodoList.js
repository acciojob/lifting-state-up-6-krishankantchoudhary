
import React from "react";

const TodoList = ({ todos, onComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          {!todo.completed && (
            <button onClick={() => onComplete(todo.id)}>Complete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
