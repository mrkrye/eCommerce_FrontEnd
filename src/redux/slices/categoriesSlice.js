import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";

const categoriesSlice = createSlice({
  name: "category",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAllCategories.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default categoriesSlice.reducer;
