import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const totalSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    onAuth: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const { reducer, actions } = totalSlice;
export const { onAuth } = actions;
export default reducer;
