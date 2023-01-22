import { takeLatest } from "redux-saga/effects"
import {addTaskAPI, deleteTaskAPI, handlerTodoSga, toggleCheckTaskAPI} from "./handlerSagaTodo";
import { addTask, deleteTask, doneTask, getTaskList } from "./TodoSlice";

// Theo dõi các tiến trình từ API trả về
export function* todoSaga(){
  yield takeLatest(getTaskList.type,handlerTodoSga)
  
}
// Theo dõi các tiến trình từ việc thêm task
export function* addTaskTodoSaga(){
  yield takeLatest(addTask.type,addTaskAPI)
  
}
// Theo dõi các tiến trình từ việc xóa task
export function* deleteTaskTodoSaga(){
  yield takeLatest(deleteTask.type,deleteTaskAPI)
  
}
// Theo dõi các tiến trình từ việc hoàn thành task
export function* doneTaskTodoSaga(){
  yield takeLatest(doneTask.type,toggleCheckTaskAPI)
  
}