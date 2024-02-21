import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../api/productsApi";
import { authApi } from "../api/authApi";

/*Requires authentication via token to be passed through the api*/
const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: null,
    token: null,
    reservations: [],
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        return { ...state, token: payload.token };
      }
    );
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        return { ...state, token: payload.token };
      }
    );
    builder.addMatcher(
      authApi.endpoints.getUser.matchFulfilled,
      (state, { payload }) => {
        return {
          ...state,
          user: payload,
        };
      }
    );
    builder.addMatcher(
      productsApi.endpoints.updateProduct.matchFulfilled,
      (state, { payload }) => {
        state.user.products.push(payload.product);
        return state;
      }
    );
    builder.addMatcher(
      authApi.endpoints.reserveProduct.matchFulfilled,
      (state, { payload }) => {
        return {
          ...state,
          reservations: payload.reservation,
        };
      }
    );
    // builder.addMatcher(
    //   authApi.endpoints.deleteProduct.matchFulfilled,
    //   (state, { payload }) => {
    //     state.user.products = state.user.products.filter(
    //       (product) => product.id !== payload.deletedReservation.id
    //     );
    //     return state;
    //   }
    // );
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
