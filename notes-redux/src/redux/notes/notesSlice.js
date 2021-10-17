import {createSlice} from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [],
        searchText: ""
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload)
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        }
    }
});

export const {addNote, setSearchText} = notesSlice.actions
export default notesSlice.reducer