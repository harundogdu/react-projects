import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Characters from "./pages/Characters";
import Quotes from "./pages/Quotes";
import Header from "./components/Header/Header";
import CharacterDetails from "./pages/CharacterDetails";

function App() {
    return (
        <Router>
            <div className={"app"}>
                <Header/>
                <Switch>
                    <Route path="/quotes">
                        <Quotes/>
                    </Route>
                    <Route path="/characters/:char_id">
                        <CharacterDetails/>
                    </Route>
                    <Route path="/">
                        <Characters/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
