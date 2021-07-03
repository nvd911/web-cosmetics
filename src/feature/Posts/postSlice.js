import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    onGetPosts: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const { reducer, actions } = postsSlice;
export const { onGetPosts } = actions;
export default reducer;
