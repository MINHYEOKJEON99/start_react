import { useState } from "react";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  const [finished, setFinished] = useState(false);

  const buttonClickHandler = (e) => {
    setFinished(!finished);
  };
  const finishedTodo = finished ? classes.finished : "";
  return (
    <div className={classes.todoList} id={props.id}>
      <p className={finishedTodo}>{props.description}</p>
      <button onClick={buttonClickHandler}>✔️</button>
    </div>
  );
};

export default TodoList;
