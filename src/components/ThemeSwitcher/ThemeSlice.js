import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: "light",
    },
    reducers: {
        themeChange: (state, action) => {
            state.value = action.payload;
        },
    }
})