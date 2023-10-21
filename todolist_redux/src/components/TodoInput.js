import { useRef } from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "../store/todo-slice";
import classes from "./TodoInput.module.css";

const TodoInput = (props) => {
  const dispatch = useDispatch();
  const newTodo = useRef("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (newTodo.current.value.trim().length === 0) {
      return;
    }
    dispatch(
      todoAction.addTodo({
        id: Math.random(),
        description: newTodo.current.value,
      })
    );
    newTodo.current.value = "";
  };
  return (
    <form onSubmit={formSubmitHandler} className={classes.new_todo}>
      <label>새로운 할 일</label>
      <input type="text" id="todo" ref={newTodo} />
      <button type="reset" onClick={props.onReset}>
        Cancel
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoInput;
