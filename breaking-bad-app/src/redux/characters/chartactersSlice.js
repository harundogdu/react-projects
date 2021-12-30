import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const char_limit = 12;
export const fetchAllCharacters = createAsyncThunk("characters/getAllCharacters", async (page) => {
    const response = await axios(`${process.env.REACT_APP_BASE_API_ENDPOINT}/characters?limit=${char_limit}&offset=${char_limit * page}`);
    return response.data;
})

export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        status: 'idle',
        error: '',
        page: 0,
        hasNextPage: true
    },
    reducers: {},
    extraReducers: {
        [fetchAllCharacters.pending]: (state, action) => {
            state.status = "loading"
        },
        [fetchAllCharacters.fulfilled]: (state, action) => {
            state.status = "succeeded"
            state.items = [...state.items, ...action.payload];
            state.page += 1;
            if (action.payload.length < char_limit) {
                state.hasNextPage = false;
            }
        },
        [fetchAllCharacters.rejected]: (state, action) => {
            state.status = "rejected"
            state.error = action.error.message;
        }
    }
})

export default charactersSlice.reducer;
