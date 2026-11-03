
import React, { useState, useEffect, useMemo } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [task, setTask] = useState("");

  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  const addTodo = () => {
    setTodos(prev => [
      ...prev,
      { text: "New todo", completed: false }
    ]);
  };

  const incrementCounter = () => {
    setCounter(prev => prev + 1);
  };

  const addCustomTodo = () => {
    if (task.trim().length <= 5) {
      return;
    }

    setTodos(prev => [
      ...prev,
      { text: task.trim(), completed: false }
    ]);

    setTask("");
  };

  const totalTodos = useMemo(() => {
    return todos.length;
  }, [todos]);

  return (
    <div>
      <h1>Task Management App</h1>

      <h2>Counter: {counter}</h2>

      <button onClick={incrementCounter}>
        Increment
      </button>

      <hr />

      <button onClick={addTodo}>
        Add Todo
      </button>

      <h3>Total Todos: {totalTodos}</h3>

      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Enter custom task"
      />

      <button onClick={addCustomTodo}>
        Submit
      </button>

      <UseMemo todos={todos} />

      <ReactMemo todos={todos} />
    </div>
  );
}

export default App;
