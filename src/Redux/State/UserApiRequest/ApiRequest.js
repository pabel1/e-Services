import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseURL = "https://task-management-rest-api.onrender.com/";
export const apiRequest = createApi({
  reducerPath: "apiRequest",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseURL,
  }),
  tagTypes:['user','task'],
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
      invalidatesTags:['user'],
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
      invalidatesTags:['user'],
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
      invalidatesTags:['user'],
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
      invalidatesTags:['user'],
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
      invalidatesTags:['user'],
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
      invalidatesTags:['user'],
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
      invalidatesTags:['task'],
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
      providesTags:['task']
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
      providesTags:['task']
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
      invalidatesTags:['task'],
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
      invalidatesTags:['task'],
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
