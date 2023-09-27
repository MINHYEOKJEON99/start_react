import { useContext, useState } from "react";
import TodoContext from "../store/Todo-context";
import classes from "./TodoInput.module.css";

const TodoInput = (props) => {
  const ctx = useContext(TodoContext);
  const [enteredValue, setEneteredValue] = useState("");

  const enteredValueHandler = (event) => {
    setEneteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      return;
    }

    const newTodo = { id: Math.random(), description: enteredValue };

    ctx.addTodo(newTodo);

    setEneteredValue("");
  };
  return (
    <form onSubmit={formSubmitHandler} className={classes.new_todo}>
      <label>새로운 할 일</label>
      <input
        type="text"
        id="todo"
        value={enteredValue}
        onChange={enteredValueHandler}
      />
      <button type="reset" onClick={props.onReset}>
        Cancel
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoInput;
