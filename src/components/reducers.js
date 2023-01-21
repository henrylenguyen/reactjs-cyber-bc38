import { combineReducers } from "redux";
import LoadingSlice from "./Global/Loading/LoadingSlice";
import TodoSlice from "./Todo/TodoSlice";

const reducer = combineReducers({
  todo: TodoSlice,
  loading: LoadingSlice,
});
export default reducer;