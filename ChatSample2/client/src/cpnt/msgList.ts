import { Message } from "../types";
import { createSlice } from '@reduxjs/toolkit'

let msgList = createSlice({
    name :"MessageList",
    initialState : [ ],
    reducers :{
        addMsg(state :Message[], msg :{type :string, payload :Message}){
            state.push(msg.payload);
        }
    }
})

export let { addMsg } = msgList.actions;
export default msgList;