import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";

const productsSlice = createSlice({
  name: "product",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAllProducts.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default productsSlice.reducer;
