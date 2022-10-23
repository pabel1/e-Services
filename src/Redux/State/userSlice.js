import { createSlice } from "@reduxjs/toolkit";

 const initialState={
    value:[],
    // firstname:" ",
    // lastname:" ",
    // email:" ",
    // phone:" ",
    // photo:"",
 }

export const userSlice=createSlice({
    name:"userInfo",
    initialState,
    reducers:{
        setUserInfo:(state,action)=>{
            state.value=action.payload
            // state.firstname=action.payload.firstname
            // state.lastname=action.payload.lastname
            // state.email=action.payload.email
            // state.phone=action.payload.phone
            // state.photo=action.payload.photo
            

        },
        removeUserInfo:(state,action)=>{
            state.value=action.payload
            // state.firstname=action.payload.firstname
            // state.lastname=action.payload.lastname
            // state.email=action.payload.email
            // state.phone=action.payload.phone
            // state.photo=action.payload.photo
        },
    }

})

export const {setUserInfo,removeUserInfo}=userSlice.actions
export default userSlice.reducer;