import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    taskList: [],
  },
  reducers: {
    getTaskList: () => {},
    setTaskList: (state, action) => {
      return {
        ...state,
        taskList: action.payload
      };

    },
    addTask: (state, action) => {
      console.log("state", state);
      console.log("action", action);
      return {
        ...state,
        taskList: [...state.taskList,action.payload]
      };
      
    },
  },
});
export const { getTaskList, addTask, setTaskList } = TodoSlice.actions;
export default TodoSlice.reducer;