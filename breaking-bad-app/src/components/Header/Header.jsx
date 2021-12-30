import React from "react";
import {Link} from "react-router-dom";
import './styles.css';
const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Breaking Bad</Link>
                </li>
                <ul>
                    <li>
                        <Link to="/">Characters</Link>
                    </li>
                    <li>
                        <Link to="/quotes">Quotes</Link>
                    </li>
                </ul>
            </ul>
        </nav>
    )
}
export default Header;