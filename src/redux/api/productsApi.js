import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL || "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    /*Returns a list of products from the database*/
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    /*Returns the details of a single product object*/
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    /*Any registered user can update (checkout or return) a product. 
    You must pass a valid token with this request, or it will be rejected.*/
    updateProduct: builder.mutation({
      query: ({ id, body, token }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: body,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useUpdateProductMutation,
} = productsApi;
