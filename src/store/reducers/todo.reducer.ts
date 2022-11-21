import { ITodo } from "../../types/todo.type";
import { setTodos } from "../actions/todo.action";

const initState: ITodo[] = []

interface IAction {
  type: string,
  payload: {
    data : {
      allTodo: ITodo[]
    }
  }
}

export const todoReducer = (state=initState, action: IAction) => {
  switch (action.type) {
    case setTodos:
      return action.payload.data.allTodo
    default:
      return state
  }
};
