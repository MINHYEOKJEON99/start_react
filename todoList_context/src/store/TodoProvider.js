import { useState } from "react";
import TodoContext from "./Todo-context";

const TodoProvider = (props) => {
  const [list, setList] = useState([
    {
      id: "1",
      description: "아침 산책",
    },
    {
      id: "2",
      description: "리액트 공부하기",
    },
  ]);

  const addTodoHandler = (todo) => {
    setList((prevList) => {
      return [...prevList, todo];
    });
  };

  const todoContext = {
    todos: list,
    addTodo: addTodoHandler,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
