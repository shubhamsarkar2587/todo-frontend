import { call, put, takeEvery } from "redux-saga/effects";
import { getTodos, setTodosAction } from "../store/actions/todo.action";
import { getTodoService } from "../services/api/todo.api";

function* getTodoSaga():any {
  const response = yield call(getTodoService)
  yield put(setTodosAction(response))
}

function* todoSaga() {
  yield takeEvery(getTodos, getTodoSaga)
}

export default todoSaga;
