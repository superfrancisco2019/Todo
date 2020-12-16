import React, { useState } from "react";
import Todo from "./Todo/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: todos.length + 1, text: input }]);
    setInput("");
    console.log(todos);
  };

  return (
    <div className="app">
      <p className="title">TODO</p>
      <form className="main__frame">
        <input
          className="input"
          value={input}
          placeholder="What needs to be done?"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="new__todo__button"
          disabled={!input}
          type="submit"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </form>
      <div className="list__container">
        {todos.map((todo) => (
          <Todo classname="todo" text={todo.text} id={todo.id}/>
        ))}
      </div>
    </div>
  );
}

export default App;
