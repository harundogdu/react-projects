import React from "react";
import ColorButton from "./ColorButton";
import {useDispatch, useSelector} from "react-redux";
import {addNote} from "../redux/notes/notesSlice";
import {nanoid} from "nanoid";

const NoteInput = () => {
    const [text, setText] = React.useState('');
    const [bgColor, setBgColor] = React.useState("red")

    const dispatch = useDispatch();
    const items = useSelector(state => state.items);

    const addNewNote = () => {
        if (text === "") {
            alert("Please fill in the relevant fields!")
            return;
        }
        const note = items.filter(item => item.note === text);
        if (note.length > 0) {
            alert("You have already added this note!")
            return;
        }
        dispatch(addNote({id: nanoid(5), note: text, bgColor}))
        setText('')
    }
    return (
        <div className={"textarea-box"}>
            <textarea className={"textarea-input"} placeholder={"Enter your note here..."} value={text}
                      onChange={(e) => setText(e.target.value)}/>
            <div className={"textarea-inner-container"}>
                <ColorButton bgColor={bgColor} setBgColor={setBgColor}/>
                <button className={"btn-add"} onClick={addNewNote}>ADD</button>
            </div>
        </div>
    )
}

export default NoteInput;