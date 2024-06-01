import { configureStore } from "@reduxjs/toolkit";
import phoneUser from './slices/phoneSlice'
import setFiltershow from "./slices/setFiltershow";
import showType  from "./slices/showType";
const store = configureStore({
    reducer:{
        phoneUser:phoneUser,
        setFiltershow:setFiltershow,
        showType:showType,
    }
})

export default store;