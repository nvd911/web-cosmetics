import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    onGetProducts: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const { reducer, actions } = productsSlice;
export const { onGetProducts } = actions;
export default reducer;
