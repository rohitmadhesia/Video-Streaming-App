import { createSlice } from "@reduxjs/toolkit";
import { CHAT_COUNT } from "./Constant";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        moveChat: []
    },
    reducers:{
        addChatMessage:  (state,action) => {
            state.moveChat.splice(CHAT_COUNT,1)
            state.moveChat.unshift(action.payload)
        }
    }
})

export const{addChatMessage} = chatSlice.actions

export default chatSlice.reducer
