import {configureStore} from "@reduxjs/toolkit";
import charactersReducer from "./characters/chartactersSlice";
import quotesReducer from "./quotes/quotesSlice";

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
        quotes : quotesReducer
    }
})