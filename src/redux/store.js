//store sayfası sliceleri içerir kapsar
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userReducer from "./userSlice"//usersliceda export ettim burda import. app jsde de her yerde kullanabiliirm dedim 

export const store = configureStore({
    reducer:{//reducer in amacı slicleri import ve export etmek
        user:  userReducer
    },//serial hatasını çözmek için kullandık. redux ile alakalı
    middleware: (getDefaultMiddlware) =>getDefaultMiddlware({serializableCheck:false})
})