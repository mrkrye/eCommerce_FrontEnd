import { createSlice } from "@reduxjs/toolkit";
import { categoryApi } from "../api/categoryApi";

const categoriesSlice = createSlice({
  name: "category",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      categoryApi.endpoints.getAllCategories.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default categoriesSlice.reducer;
