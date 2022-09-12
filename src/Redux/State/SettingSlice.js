import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loader:"hidden"
}

export const settingSlice=createSlice({
    name:"settingSlice",
    initialState,
    reducers:{
        showLoader:(state)=>{
            state.loader=" "
        },
        hideLoader:(state)=>{
            state.loader="hidden"
        },
    }
})

export const {showLoader,hideLoader}=settingSlice.actions;
export default settingSlice.reducer;