import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    replaceTodo(state, action) {
      state.todos = action.payload.todos;
    },
    addTodo(state, action) {
      const newTodo = action.payload;

      state.todos.push({
        id: newTodo.id,
        description: newTodo.description,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
  },
});

export const todoAction = todoSlice.actions;

export default todoSlice;
