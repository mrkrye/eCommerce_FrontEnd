import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
import authSlice from "../slices/authSlice";
import productsSlice from "../slices/productsSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
    products: productsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
