import { createSlice } from "@reduxjs/toolkit";
import { categoriesApi } from "../api/categoriesApi";

const categoriesSlice = createSlice({
  name: "category",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      categoriesApi.endpoints.getAllCategories.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default categoriesSlice.reducer;
