import { all, call, put, takeEvery, debounce } from "redux-saga/effects";
import { createTodo, deleteTodo, getTodos, getTodosAction, setTodoSagaAction, updateTodoStatus } from "../store/actions/todo.action";
import { deleteTodoService, getTodoService, postTodoService, updateTodoStatusService } from "../services/api/todo.api";
import { toast } from 'react-toastify';


function* getTodoSaga(data:any):any {
  try {
    const response = yield call(getTodoService);
    yield put(setTodoSagaAction(response));
    yield data.callback()
  } catch (err) {
    console.log(err);
  };
};

function* createTodoSaga(data:any):any {
  try {
    const postData = data.payload;
    yield call(postTodoService, postData);
    yield put(getTodosAction({ callback: () => {}}));
    toast.success('Todo successfully Created !', {
      position: toast.POSITION.TOP_RIGHT
    });
  } catch (err) {
    console.log(err);
  }
}

function* deleteTodoSaga(data:any):any {
  try {
    const deleteTodoId = data.payload;
    yield call(deleteTodoService, deleteTodoId);
    yield put(getTodosAction({ callback: () => {} }));
    toast.warning('Todo successfully deleted !', {
      position: toast.POSITION.TOP_RIGHT
    });
  } catch (err) {
    console.log(err);
  }
}

function* updateTodoStatusSaga(data:any):any {
  try {
    const deleteTodoId = data.payload;
    yield call(updateTodoStatusService, deleteTodoId);
    yield put(getTodosAction({ callback: () => {} }));
    toast.success('Status successfully updated !', {
      position: toast.POSITION.TOP_RIGHT
    });
  } catch (err) {
    console.log(err);
  }
}

function* todoSaga() {
  yield all([
    takeEvery(getTodos, getTodoSaga),
    takeEvery(createTodo, createTodoSaga),
    debounce(500, deleteTodo, deleteTodoSaga),
    debounce(500, updateTodoStatus, updateTodoStatusSaga),
  ])
}

export default todoSaga;
