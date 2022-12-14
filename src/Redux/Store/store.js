import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {apiRequest} from '../../Redux/State/UserApiRequest/ApiRequest'
import loaderReducer from "../State/SettingSlice"
import authReducer from "../State/authSlice"
import userReducer from '../State/userSlice'
export const store=configureStore({
    reducer:{
        [apiRequest.reducerPath]:apiRequest.reducer,
        loader:loaderReducer,
        auth:authReducer,
        user:userReducer,

    },
    middleware:(gDM)=>gDM().concat(apiRequest.middleware)
});
setupListeners(store.dispatch);