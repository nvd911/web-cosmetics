import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const totalSlice = createSlice({
  name: "total",
  initialState: initialState,
  reducers: {
    onTotalDefault: (state, action) => {
      state = action.payload;
      return state;
    },
    onTotalDelete: (state, action) => {
      const { showTotal, showTotalDelete } = action.payload;
      state = showTotal - showTotalDelete;
      return state;
    },
  },
});

const { reducer, actions } = totalSlice;
export const { onTotalDefault, onTotalDelete } = actions;
export default reducer;
