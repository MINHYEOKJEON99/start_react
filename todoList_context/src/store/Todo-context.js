import React from "react";

const TodoContext = React.createContext({
  todos: [],
  addTodo: (todo) => {},
});

export default TodoContext;
