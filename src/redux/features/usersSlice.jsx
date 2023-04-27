import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{},
    type:""
}

const usersSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser: (state,action) => {
            const user = action.payload;
            state.type = user.type;
            state.user = user.user;
            console.log(state);
        }
    }
})

export default usersSlice.reducer;
export const {setUser } = usersSlice.actions;