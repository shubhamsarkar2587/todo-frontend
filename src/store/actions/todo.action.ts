import { ICallback, ICreateTodo, ITodo } from "../../types/todo.type";

// get Action used to get all todos using redux-saga
// set Action used to set all todos in reducer store
// create Action used to create todo using redux-saga

export const getTodos = "GET_TODOS";
export const setTodos = "SET_TODOS";
export const createTodo = "CREATE_TODO";
export const deleteTodo = "DELETE_TODO";
export const updateTodoStatus = "UPDATE_TODO_STATUS";

export const getTodosAction = ({ callback }:ICallback) => ({
  type: getTodos,
  callback
});

export const setTodoSagaAction = (value: ITodo[]) => ({
  type: setTodos,
  payload: value
});

export const createTodoAction = (value: ICreateTodo) => ({
  type: createTodo,
  payload: value
});

export const deleteTodoAction = (id: string) => ({
  type: deleteTodo,
  payload: id
});

export const changeTodoStatusAction = (id: string) => ({
  type: updateTodoStatus,
  payload: id
});

