import {configureStore} from "@reduxjs/toolkit";
import notesReducer from './notes/notesSlice';

export default configureStore({
    reducer: notesReducer
});