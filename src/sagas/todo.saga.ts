import { all, call, put, takeEvery } from "redux-saga/effects";
import { createTodo, getTodos, getTodosAction, setTodoSagaAction } from "../store/actions/todo.action";
import { getTodoService, postTodoService } from "../services/api/todo.api";

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
    const postData = data.payload
    yield call(postTodoService, postData) 
    yield put(getTodosAction())
  } catch (err) {
    console.log(err);
  }
}

function* todoSaga() {
  yield all([
    takeEvery(getTodos, getTodoSaga),
    takeEvery(createTodo, createTodoSaga)
  ])
}

export default todoSaga;
