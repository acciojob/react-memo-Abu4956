
import React, { useMemo } from "react";

function UseMemo({ todos }) {
  const completedTodos = useMemo(() => {
    console.log("Calculating completed todos");

    return todos.filter(todo => todo.completed).length;
  }, [todos]);

  return (
    <div>
      <h3>Completed Todos: {completedTodos}</h3>
    </div>
  );
}

export default UseMemo;
