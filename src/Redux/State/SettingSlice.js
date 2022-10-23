import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loader:"loadingOverlayhide"
}

export const settingSlice=createSlice({
    name:"settingSlice",
    initialState,
    reducers:{
        showLoader:(state)=>{
            state.loader="loadingOverlayshow"
        },
        hideLoader:(state)=>{
            state.loader="loadingOverlayhide"
        },
    }
})

export const {showLoader,hideLoader}=settingSlice.actions;
export default settingSlice.reducer;