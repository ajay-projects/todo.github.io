import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import logo from "../images/header-logo.png";
class Navigation extends Component {
  render() {
    return (
      <div className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <ul className="links">
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
