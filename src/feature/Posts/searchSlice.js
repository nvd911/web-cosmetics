import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    onSearchBtn: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const { reducer, actions } = searchSlice;
export const { onSearchBtn } = actions;
export default reducer;
