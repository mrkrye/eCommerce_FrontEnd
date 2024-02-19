import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../api/productsApi";
import { categoriesApi } from "../api/categoriesApi";
import { authApi } from "../api/authApi";
import authSlice from "../slices/authSlice";
import productsSlice from "../slices/productsSlice";
import categoriesSlice from "../slices/categoriesSlice";
import ordersSlice from "../slices/ordersSlice";
import usersSlice from "../slices/usersSlice";
import { ordersApi } from "../api/ordersApi";
import { usersApi } from "../api/usersApi";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    authSlice,
    productsSlice,
    categoriesSlice,
    ordersSlice,
    usersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      categoriesApi.middleware,
      authApi.middleware,
      ordersApi.middleware,
      usersApi.middleware
    ),
});

export default store;
