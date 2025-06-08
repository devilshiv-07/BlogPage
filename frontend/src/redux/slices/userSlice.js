import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id: "",
    name: "",
    role: "",
    userProfileUrl: "",
    isAuth: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { _id, name, role, userProfileUrl } = action.payload;
            state._id = _id;
            state.name = name;
            state.role = role;
            state.userProfileUrl = userProfileUrl;
            state.isAuth = true;
        },

        removeUser: (state) => {
            state._id = "";
            state.name = "";
            state.role = "";
            state.userProfileUrl = "",
            state.isAuth = false;
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;