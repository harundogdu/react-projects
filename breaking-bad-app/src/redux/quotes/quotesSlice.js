import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllQuotes = createAsyncThunk("quotes/getAllQuotes", async () => {
    const response = await axios(`${process.env.REACT_APP_BASE_API_ENDPOINT}/quotes`);
    return response.data;
})
export const quotesSlice = createSlice({
    name: "quotes",
    initialState: {
        items: [],
        status: "idle",
        error: ''
    },
    reducers: {},
    extraReducers: {
        [getAllQuotes.pending]: (state, action) => {
            state.status = "loading"
        }, [getAllQuotes.fulfilled]: (state, action) => {
            state.status = "succeeded"
            state.items = action.payload;
        }, [getAllQuotes.rejected]: (state, action) => {
            state.status = "rejected"
            state.error = action.error.message;
        }
    }
})

export default quotesSlice.reducer;