import { ICreateTodo, ITodo } from "../../types/todo.type";

// get Action used to get all todos using redux-saga
// set Action used to set all todos in reducer store
// create Action used to create todo using redux-saga

export const getTodos = "GET_TODOS";
export const setTodos = "SET_TODOS";
export const createTodo = "CREATE_TODO";

export const getTodosAction = () => ({
  type: getTodos
});

export const setTodosAction = (value: ITodo[]) => ({
  type: setTodos,
  payload: value
});

export const createTodoAction = (value: ICreateTodo) => ({
  type: createTodo,
  payload: value
});
