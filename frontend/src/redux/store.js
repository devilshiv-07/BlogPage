import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/userSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
    },

    devTools: import.meta.env.VITE_NODE_ENV !== 'production',
})

export default store;