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
      return {
        ...state,
        taskList: [...state.taskList,action.payload]
      };
      
    },
    deleteTask: (state, action) => {
      let newTaskList = [...state.taskList];
      newTaskList.splice(action.payload - 1 ,1)
      return {
        ...state,
        taskList: newTaskList,
      };
      
    },
  },
});
export const { getTaskList, addTask, setTaskList, deleteTask } = TodoSlice.actions;
export default TodoSlice.reducer;