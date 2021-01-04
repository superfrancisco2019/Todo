import React, { useState } from "react";
import "./Todo.css";

function Todo(props) {
  const [isDone, setisDone] = useState(false);

  const [buttonState, setButtonState] = useState("show__button");

  const [inputState, setInputState] = useState("hide__input");

  const isCompleted = (event) => {
    event.preventDefault();
    setisDone(true);
    console.log(isDone);
  };

  const hideButton = (event) => {
    setButtonState("hide__button");
  };

  const showInput = (event) => {
    setInputState("show__input");
  };

  return (
    <ul className="todo__container">
      <li
        key={props.id}
        className={isDone ? "todo__completed" : "todo__list"}
      >
        {props.text}{" "}
        <button
          className={isDone ? "completed" : "check"}
          onClick={isCompleted}
        >
          {" "}
          &#10004;{" "}
        </button>
        <form> 
          <input className={inputState} placeholder="change" onSubmit={(event) => props.handleChange(event)}/> 
        </form>
        <button
          key={props.id}
          className={buttonState}
          onClick={() => {
            hideButton();
            showInput();
          }}
        >
          ✎
        </button>
      </li>
    </ul>
  );
}

export default Todo;
