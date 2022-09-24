import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseURL = "https://task-management-api-demo.herokuapp.com/";
export const apiRequest = createApi({
  reducerPath: "apiRequest",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseURL,
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (newData) => ({
        url: "user/signup",
        method: "POST",
        body: newData,
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      }),
    }),
    loginUser: builder.mutation({
      query: (newData) => ({
        url: "user/login",
        method: "POST",
        body: newData,
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      }),
    }),
    createTask: builder.mutation({
      query: ({newData, token}) => ({
        url: "task/createtask",
        method: "POST",
        body: newData,
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-type":"application/json;charset=UTF-8"
        },
      }),
    }),
    getAllTask: builder.query({
      query: ({params,token}) => ({
        url: `task/gettask/${params}`,
        method: "GET",
        // body: newData,
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-type":"application/json;charset=UTF-8"
        },
      }),
    }),
    getTaskSumByStatus: builder.query({
      query: (token) => ({
        url: "task/taskcount",
        method: "GET",
        // body: newData,
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-type":"application/json;charset=UTF-8"
        },
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useCreateTaskMutation,
  useGetAllTaskQuery,
  useGetTaskSumByStatusQuery
} = apiRequest;
