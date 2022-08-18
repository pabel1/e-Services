
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BaseURL="https://task-management-api-demo.herokuapp.com"
export const  apiRequest =createApi({
    reducerPath:"apiRequest",
    baseQuery:fetchBaseQuery({
        baseUrl:BaseURL
    }),
    endpoints:(builder)=>({
        createUser:builder.mutation({
            query:(newData)=>({
                url:"user/signup",
                method: 'POST',
                body:newData,
                headers:{
                    "Content-type":"application/json;charset=UTF-8"
                }
            }),
        }),
    })


});

export const {useCreateUserMutation}=apiRequest;