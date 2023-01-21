import { takeLatest } from "redux-saga/effects"
import {addTaskAPI, handlerTodoSga} from "./handlerSagaTodo";
import { addTask, getTaskList } from "./TodoSlice";

// Theo dõi các tiến trình từ API trả về
export function* todoSaga(){
  yield takeLatest(getTaskList.type,handlerTodoSga)
  
}
// Theo dõi các tiến trình từ việc thêm task
export function* addTaskTodoSaga(){
  yield takeLatest(addTask.type,addTaskAPI)
  
}