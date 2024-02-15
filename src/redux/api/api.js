import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL || "http://localhost:3000",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
    },
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    getProductById: builder.query({
      query: (id) => "/products/" + id,
    }),
    getAllCategories: builder.query({
      query: () => "/categories",
    }),
    getCategoryById: builder.query({
      query: (id) => "/categories/" + id,
    }),
    register: builder.mutation({
      query: (cred) => ({
        url: "/auth/register",
        method: "POST",
        body: cred,
      }),
    }),
    login: builder.mutation({
      query: (cred) => ({
        url: "/auth/login",
        method: "POST",
        body: cred,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useRegisterMutation,
  useLoginMutation,
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
} = api;
