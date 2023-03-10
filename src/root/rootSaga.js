import { all, fork } from "redux-saga/effects";
import {addTaskTodoSaga, deleteTaskTodoSaga, doneTaskTodoSaga, todoSaga} from "../components/Todo/watcherSagaTodo";

export function* rootSaga(){
  yield all(
  [
    fork(todoSaga),
    fork(addTaskTodoSaga),
    fork(deleteTaskTodoSaga),
    fork(doneTaskTodoSaga)
  ])
}