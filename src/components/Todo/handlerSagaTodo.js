import { StatusCodes } from "http-status-codes";
import { call, put, delay } from "redux-saga/effects";
import { setLoading } from "../Global/Loading/LoadingSlice";
import { PostTaskTodoAPI, requestAPI } from "./Services";
import { getTaskList, setTaskList } from "./TodoSlice";

// Dùng để xử lý các tiến trình của API
export function* handlerTodoSga() {
  // Hiện loading lên
  yield put(setLoading(true));
  try {
    // Delay 500ms để tăng trãi nghiệm người dùng từ loading
    yield delay(500);

    // gọi đến hàm request
    let { data, status } = yield call(requestAPI);
    if (status === StatusCodes.OK) {
      yield put(setTaskList(data));
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
  // Khi load xong toàn bộ sẽ tắt loading
  yield put(setLoading(false));
}

//--------------------ADD TASK-----------------
export function* addTaskAPI({payload}) {
  console.log("payload", payload);
  try {
    const { status } = yield call(() => {
      return PostTaskTodoAPI(payload.name);
    });

    if (status === StatusCodes.CREATED) {
      yield put(getTaskList());
    }
  } catch (error) {
    console.log(error);
  }
}
