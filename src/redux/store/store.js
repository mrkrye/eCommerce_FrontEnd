import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../api/productsApi";
import { categoryApi } from "../api/categoryApi";
import { authApi } from "../api/authApi";
import authSlice from "../slices/authSlice";
import productsSlice from "../slices/productsSlice";
import categoriesSlice from "../slices/categoriesSlice";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    authSlice,
    productsSlice,
    categoriesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      categoryApi.middleware,
      authApi.middleware
    ),
});

export default store;
