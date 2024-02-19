import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL || "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => "/orders",
    }),
    getOrderById: builder.query({
      query: (id) => `/orders/${id}`,
    }),
  }),
});

export const { useGetAllOrdersQuery, useGetOrderByIdQuery } = ordersApi;
