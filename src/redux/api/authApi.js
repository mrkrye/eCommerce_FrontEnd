import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL || "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    /*This route is used to create a new user account. 
    On success, you will be given a JSON Web Token to be passed to the server for requests requiring authentication.*/
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body: body,
      }),
    }),
    /*This route is used for a user to login when they already have an account. 
    On success, you will be given a JSON Web Token to be passed to the server for requests requiring authentication.*/
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body: body,
      }),
    }),
    /*This route is used to grab an already logged in user's relevant data.
    It is mostly helpful for verifying the user has a valid token (and is thus logged in) and displaying account details.
    You must pass a valid token with this request, or it will be rejected.*/
    getUser: builder.query({
      query: (token) => ({
        url: "/users",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    /*This route returns a list of products the current user has checked out.
    You must pass a valid token with this request, or it will be rejected.*/
    reserveProduct: builder.query({
      query: (token) => ({
        url: "/orders",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
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

export const { useRegisterMutation, useLoginMutation } = authApi;
