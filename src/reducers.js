import { combineReducers } from "@reduxjs/toolkit";
import TodoSlice from "./components/TodoList/TodoSlice";

const reducer = combineReducers({
  todo: TodoSlice,
});
export default reducer;
