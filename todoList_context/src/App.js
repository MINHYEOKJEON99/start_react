import { useContext, useEffect, useState } from "react";
import classes from "./App.module.css";
import Count from "./components/Count";
import Title from "./components/Title";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoContext from "./store/Todo-context";

function App() {
  const ctx = useContext(TodoContext);

  const [inputVisible, setInputVisible] = useState(false);
  const [remain, setRemain] = useState(ctx.todos.length);

  useEffect(() => {
    setRemain(ctx.todos.length);
  }, [ctx.todos.length]);

  const inputVisibleHandler = (e) => {
    setInputVisible(true);
  };

  const inputInVisibleHandler = (e) => {
    setInputVisible(false);
  };

  console.log();

  const todoList = ctx.todos.map((list) => (
    <TodoList key={list.id} id={list.id} description={list.description} />
  ));

  return (
    <div className={classes.App}>
      <div className={classes.outline}>
        <Title />
        <Count remain={remain} />
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
