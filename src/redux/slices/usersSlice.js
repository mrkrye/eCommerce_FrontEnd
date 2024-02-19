import { createSlice } from "@reduxjs/toolkit";
import { usersApi } from "../api/usersApi";

const usersSlice = createSlice({
  name: "user",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.getAllUsers.matchFulfilled,
      (state, { payload }) => {
        return {
          ...state,
          users: payload.users,
        };
      }
    );
  },
});

export default usersSlice.reducer;
