import { configureStore } from "@reduxjs/toolkit";
import phoneUser from './slices/phoneSlice'
const store = configureStore({
    reducer:{
        phoneUser:phoneUser
    }
})

export default store;