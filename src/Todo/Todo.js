import React, { useState } from "react";
import "./Todo.css";

function Todo(props) {
  const [isDone, setisDone] = useState();

  const isCompleted = (event) => {
    event.preventDefault();
    setisDone(true);
    console.log(isDone);
  };

  return (
    <div className="todo__list__container">
      <li className="todo__list">
        {props.text}{" "}
        <button className="check" onClick={isCompleted}>
          {" "}
          &#10004;{" "}
        </button>
      </li>
    </div>
  );
}

export default Todo;