import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    onGetCart: (state, action) => {
      state = action.payload;
      return state;
    },
    onDeleteCartProduct: (state, action) => {
      state = state.filter((product) => product.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },
    onUpdateCartPlus: (state, action) => {
      const index = state.findIndex((product) => product.id === action.payload);
      state[index].quantity++;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    onUpdateCartMinus: (state, action) => {
      const index = state.findIndex((product) => product.id === action.payload);
      if (state[index].quantity > 1) {
        state[index].quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    onUpdateCartDetail: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      state[index].quantity += action.payload.cart;
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },
    onAddToCart: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

const { reducer, actions } = cartSlice;
export const {
  onDeleteCartProduct,
  onUpdateCartMinus,
  onUpdateCartPlus,
  onUpdateBtnCart,
  onAddToCart,
  onGetCart,
  onUpdateCartDetail,
} = actions;
export default reducer;
