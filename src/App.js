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

  const handleChange = (event) => {
    event.preventDefault();
    setTodos(todos.splice(todos.id, 1, event.target.value));
  };

  return (
    <div className="app">
      <p className="title">TODO</p>
      <form className="main__frame" onSubmit={addTodo}>
        <input
          className="input"
          value={input}
          placeholder="What needs to be done?"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="new__button"
          disabled={!input}
          type="submit"
          
        >
          Add Todo
        </button>
      </form>
      <div className="list__container">
        {todos.map((todo) => (
          <Todo classname="todo" handleChange={handleChange} text={todo.text} id={todo.id} key={todo.id}/>
        ))}
      </div>
    </div>
  );
}

export default App;
