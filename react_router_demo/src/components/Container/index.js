/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
//pages
import About from "../About";
import Contact from "../Contact";
import { useTheme } from "../Context/ThemeContext";
import Error404 from "../Error/404";
import Footer from "../Footer";
import Home from "../Home";
import User from "../User";
import Users from "../Users";

function Container() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Router>
        <div>
          <a
            href="#"
            id="btnTheme"
            className={`float-start theme-btn-${theme}`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <FontAwesomeIcon icon={faMoon} />
          </a>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName="activeElementNew" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeElement" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeElement" to="/users">
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeElement" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/users/:id" component={User} />
            <Route path="/users" component={Users} />
            <Route path="/" exact component={Home} />
            <Route path="*" component={Error404} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default Container;
