import { useEffect, useState } from "react";
import classes from "./App.module.css";
import Count from "./components/Count";
import Title from "./components/Title";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [remain, setRemain] = useState(0);

  const fetchTodoListHandler = async () => {
    const response = await fetch(
      "https://todolist-1813e-default-rtdb.firebaseio.com/todos.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();

    const todoData = [];

    for (const key in data) {
      todoData.push({
        id: key,
        todo: data[key].todo,
      });
    }
    setTodos(todoData);
  };

  const addTodoHandler = async (todo) => {
    const response = await fetch(
      "https://todolist-1813e-default-rtdb.firebaseio.com/todos.json",
      {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchTodoListHandler();
    setRemain(todos.length);
  }, [todos]);

  const inputVisibleHandler = (e) => {
    setInputVisible(true);
  };

  const inputInVisibleHandler = (e) => {
    setInputVisible(false);
  };

  console.log();

  const todoList = todos.map((list) => (
    <TodoList key={list.id} id={list.id} description={list.todo} />
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
      {inputVisible && (
        <TodoInput onReset={inputInVisibleHandler} onAdd={addTodoHandler} />
      )}
    </div>
  );
}

export default App;
