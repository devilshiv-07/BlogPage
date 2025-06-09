import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id: "",
    name: "",
    role: "",
    profilePic: "",
    isAuth: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { _id, name, role, profilePic } = action.payload;
            state._id = _id;
            state.name = name;
            state.role = role;
            state.profilePic = profilePic;
            state.isAuth = true;
        },

        removeUser: (state) => {
            state._id = "";
            state.name = "";
            state.role = "";
            state.profilePic = "",
            state.isAuth = false;
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;