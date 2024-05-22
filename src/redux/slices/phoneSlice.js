import { createSlice } from "@reduxjs/toolkit";

const phoneSlice = createSlice({
    name:"phoneUser",
    initialState:{
        phonNumber:"aaa"
    },
    reducers:{
        onPhonChange:(state,action) =>{
            state.phonNumber= action.payload
        }
    }
})

export const {onPhonChange}=phoneSlice.actions

export default phoneSlice.reducer