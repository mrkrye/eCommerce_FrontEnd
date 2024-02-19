import { createSlice } from "@reduxjs/toolkit";
import { ordersApi } from "../api/ordersApi";

const ordersSlice = createSlice({
  name: "order",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      ordersApi.endpoints.getAllOrders.matchFulfilled,
      (state, { payload }) => {
        return {
          ...state,
          orders: payload.orders,
        };
      }
    );
  },
});

export default ordersSlice.reducer;
