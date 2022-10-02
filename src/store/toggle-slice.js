import { createSlice } from "@reduxjs/toolkit";

const toggleSlice=createSlice({
    name:'toggle',
    initialState:{
        isDark:false,
        darkMode:''
    },
    reducers:{
        setDark(state){state.isDark=!state.isDark},
    }

})
export const toggleActions=toggleSlice.actions;
export default toggleSlice