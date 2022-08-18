import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {apiRequest} from '../../Redux/State/UserApiRequest/ApiRequest'
export const store=configureStore({
    reducer:{
        [apiRequest.reducerPath]:apiRequest.reducer,

    },
    middleware:(gDM)=>gDM().concat(apiRequest.middleware)
});
setupListeners(store.dispatch);