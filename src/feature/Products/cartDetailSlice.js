import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const productsSlice = createSlice({
  name: "cartDetail",
  initialState: initialState,
  reducers: {
    onGetDetail: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const { reducer, actions } = productsSlice;
export const { onGetDetail } = actions;
export default reducer;
