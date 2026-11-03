
import React from "react";

const ReactMemo = React.memo(function ReactMemo({ todos }) {
  console.log("ReactMemo component rendered");

  return (
    <div>
      <h3>Todo List</h3>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
