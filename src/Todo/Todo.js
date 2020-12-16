import React, { useState } from "react";
import "./Todo.css";

function Todo(props) {
  const [isDone, setisDone] = useState(false);

  const isCompleted = (event) => {
    event.preventDefault();
    setisDone(true);
    console.log(isDone);
  };

  return (
    <ul className="todo__list__container">
      <li className={isDone ? "todo__list__completed" : "todo__list"}>
        {props.text}{" "}
        <button
          className={isDone ? "completed" : "check"}
          onClick={isCompleted}
        >
          {" "}
          &#10004;{" "}
        </button>
      </li>
    </ul>
  );
}

export default Todo;
