import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL || "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    /*Returns a list of categories  from the database*/
    getAllCategories: builder.query({
      query: () => "/categories",
    }),
    /*Returns a list of selected category type*/
    getCategoryById: builder.query({
      query: (id) => "/categories/" + id,
    }),
  }),
});

export const { useGetAllCategoriesQuery, useGetCategoryByIdQuery } =
  categoriesApi;
