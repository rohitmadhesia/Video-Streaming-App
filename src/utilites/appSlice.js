import { createSlice } from "@reduxjs/toolkit";

const appSlice  = createSlice({
    name:"card",
    initialState:{
        isMenuOpen: true,
        moviesData : null
    },
    reducers:{
       toggleMenu: (state) => {
          state.isMenuOpen = !state.isMenuOpen
       },
       closeMenu: (state) => {
         state.isMenuOpen = false
       },
       addMoviesData : (state,action) => {
        state.moviesData  = action.payload
       }
    
    }
})
  
export const {toggleMenu,closeMenu,addMoviesData} = appSlice.actions

export default appSlice.reducer

