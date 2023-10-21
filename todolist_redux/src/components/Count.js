import { useSelector } from "react-redux";
import classes from "./Count.module.css";

const Count = () => {
  const todos = useSelector((state) => state.todo.todos);

  return <div className={classes.count}>{`할 일 ${todos.length}개남음`}</div>;
};
export default Count;
