import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "../store/todo-slice";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  const [finished, setFinished] = useState(false);
  const dispatch = useDispatch();

  const removeTodoHandler = () => {
    dispatch(todoAction.removeTodo(props.id));
  };

  const buttonClickHandler = (e) => {
    setFinished(!finished);
  };
  const finishedTodo = finished ? classes.finished : "";
  return (
    <div className={classes.todoList} id={props.id}>
      <p className={finishedTodo} onClick={buttonClickHandler}>
        {props.description}
      </p>
      <button onClick={removeTodoHandler}>삭제</button>
    </div>
  );
};

export default TodoList;
