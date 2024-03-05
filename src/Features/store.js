import { configureStore } from "@reduxjs/toolkit";
import ThemeSliceReducer  from "./themeSlice";

export const store = configureStore({
    reducer : {
        themeKey : ThemeSliceReducer,
    }
});