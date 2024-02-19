import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL || "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/users",
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = usersApi;
