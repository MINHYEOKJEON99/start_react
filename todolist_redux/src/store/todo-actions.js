import { todoAction } from "./todo-slice";

export const fetchTodoData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://todolist-1813e-default-rtdb.firebaseio.com/todos.json"
      );

      if (!response.ok) {
        throw new Error("Could not: fetch todos data!");
      }

      const data = response.json();

      return data;
    };
    try {
      const todoData = await fetchData();

      dispatch(
        todoAction.replaceTodo({
          todos: todoData.todos || [],
        })
      );
    } catch (error) {}
  };
};

export const sendTodoData = (todos) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://todolist-1813e-default-rtdb.firebaseio.com/todos.json",
        {
          method: "PUT",
          body: JSON.stringify({
            todos: todos,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending todos data failed.");
      }
    };

    try {
      sendRequest();
    } catch (error) {
      throw new Error("send Failed!");
    }
  };
};
