import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoData, sendTodoData } from "./store/todo-actions";

import classes from "./App.module.css";
import Count from "./components/Count";
import Title from "./components/Title";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const [inputVisible, setInputVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchTodoData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (todos) {
      dispatch(sendTodoData(todos));
    }
  }, [todos, dispatch]);

  const inputVisibleHandler = (e) => {
    setInputVisible(true);
  };

  const inputInVisibleHandler = (e) => {
    setInputVisible(false);
  };

  console.log();

  const todoList = todos.map((list) => (
    <TodoList key={list.id} id={list.id} description={list.description} />
  ));

  return (
    <div className={classes.App}>
      <div className={classes.outline}>
        <Title />
        <Count />
        {todoList}
        <div className={classes.buttonPosition}>
          {!inputVisible && (
            <button onClick={inputVisibleHandler} className={classes.button}>
              +
            </button>
          )}
        </div>
      </div>
      {inputVisible && <TodoInput onReset={inputInVisibleHandler} />}
    </div>
  );
}

export default App;
