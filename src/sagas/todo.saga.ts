import { all, call, put, takeEvery, debounce } from "redux-saga/effects";
import { createTodo, deleteTodo, getTodos, getTodosAction, setTodoSagaAction } from "../store/actions/todo.action";
import { deleteTodoService, getTodoService, postTodoService } from "../services/api/todo.api";

function* getTodoSaga():any {
  try {
    const response = yield call(getTodoService)
    yield put(setTodoSagaAction(response))
  } catch (err) {
    console.log(err);
  };
};

function* createTodoSaga(data:any):any {
  try {
    const postData = data.payload;
    yield call(postTodoService, postData);
    yield put(getTodosAction());
  } catch (err) {
    console.log(err);
  }
}

function* deleteTodoSaga(data:any):any {
  try {
    const deleteTodoId = data.payload;
    yield call(deleteTodoService, deleteTodoId);
    yield put(getTodosAction());
  } catch (err) {
    console.log(err);
  }
}

function* todoSaga() {
  yield all([
    takeEvery(getTodos, getTodoSaga),
    takeEvery(createTodo, createTodoSaga),
    debounce(500, deleteTodo, deleteTodoSaga)
  ])
}

export default todoSaga;
