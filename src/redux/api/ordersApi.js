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
     /*A request to this endpoint will attempt to delete an existing reservation and update a products' availability.
    You must pass a valid token with this request, or it will be rejected.*/
    deleteProduct: builder.mutation({
      query: ({ token, id }) => ({
        url: `/orders/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetAllOrdersQuery, useGetOrderByIdQuery, useDeleteProductMutation } = ordersApi;
