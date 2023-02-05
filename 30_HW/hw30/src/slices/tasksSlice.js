import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "tasks";

export const tasksSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    addTask: (state, { payload }) => {
      state.list.push(payload);
    },
    deleteTaskById: (state, { payload }) => {
      console.log(payload);
      state.list = state.list.filter(({ id }) => id !== payload);
    },
    setDone: (state, { payload: { taskId, isDone } }) => {
      const taskIndex = state.list.findIndex(({ id }) => taskId === id);
      console.log(taskIndex, taskId);
      state.list[taskIndex].isDone = isDone;
    },
  },
});

export default tasksSlice.reducer;
export const { addTask, deleteTaskById, setDone } = tasksSlice.actions;
