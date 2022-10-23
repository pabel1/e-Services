import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseURL = "http://localhost:5000/";
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
    updateUserProfile: builder.mutation({
      query: ({newData,token}) => ({
        url: "user/profileupdate",
        method: "POST",
        body: newData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json;charset=UTF-8",
        },
      }),
    }),
    forgetPassword: builder.mutation({
      query: (newData) => ({
        url: "user/sendotp",
        method: "POST",
        body: newData,
        headers: {
        
          "Content-type": "application/json;charset=UTF-8",
        },
      }),
    }),
    verifyOTP: builder.mutation({
      query: ({email,otp}) => ({
        url: "user/verifyotp",
        method: "PUT",
        body: {
          email,
          otp,
        },
        headers: {
        
          "Content-type": "application/json;charset=UTF-8",
        },
      }),
    }),
    recoverPassword: builder.mutation({
      query: ({email,newPassword}) => ({
        url: "user/recoverpassword",
        method: "POST",
        body: {
          email,
          newPassword,
        },
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
    deleteTaskById: builder.mutation({
      query: ({_id,token}) => ({
        url: `task/deletetask/${_id}`,
        method: "DELETE",
        // body: _id,
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-type":"application/json;charset=UTF-8"
        },
      }),
    }),
    updateTaskById: builder.mutation({
      query: ({_id,token,value}) => ({
        
        url: `task/updatetask/${_id}/${value}`,
        method: "PUT",
        // body: _id,
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
  useGetTaskSumByStatusQuery,
  useDeleteTaskByIdMutation,
  useUpdateTaskByIdMutation,
  useUpdateUserProfileMutation,
  useForgetPasswordMutation,
  useVerifyOTPMutation,
  useRecoverPasswordMutation,
} = apiRequest;
