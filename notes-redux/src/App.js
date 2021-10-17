import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import NoteInput from "./components/NoteInput";

function App() {
    return (
        <div className={"container"}>
            <Header/>
            <NoteInput />
            <Content/>
        </div>
    );
}

export default App;
