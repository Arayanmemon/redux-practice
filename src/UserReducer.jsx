import { createSlice } from "@reduxjs/toolkit";
import {users} from "./userList";

const slice = createSlice({
    name: "users",
    initialState: users,
    reducers: {
        addUser: (state, action)=>{
            state.push(action.payload);
        },
        updateUser: (state, action)=>{
            const {id, name, email} = action.payload;
            const uu = state.find((user)=> user.id == id);
            if(uu){
                uu.name = name;
                uu.email = email;
            }
        },
        deleteUser: (state,action)=>{
            const {id} = action.payload;
            const uu = state.find((user)=> user.id==id);
            if(uu){
                return state.filter(u=> u.id!==id);
            }
        }
    }
})
export const {addUser, updateUser, deleteUser} = slice.actions;
export default slice.reducer;
