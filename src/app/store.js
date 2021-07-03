import { configureStore } from "@reduxjs/toolkit";
import ReducerCart from "../feature/Cart/cartSlice";
import ReducerProducts from "../feature/Products/productsSlice";
import ReducerPost from "../feature/Posts/postSlice";
import ReducerTotal from "../feature/Cart/totalSlice";
import ReducerSearch from "../feature/Posts/searchSlice";
import ReducerAuth from "../feature/Auth/authSlice";
import ReducerCartDetail from "../feature/Products/cartDetailSlice";

const rootReducer = {
  cart: ReducerCart,
  total: ReducerTotal,
  products: ReducerProducts,
  posts: ReducerPost,
  searchFilter: ReducerSearch,
  auth: ReducerAuth,
  cartDetail: ReducerCartDetail,
};

export default configureStore({
  reducer: rootReducer,
});
