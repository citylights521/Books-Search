//this code creates the navigation bar

//must import react (or else it won't work!)
import React, { Component } from "react";
//imports named export Link from the DOM
import { Link } from "react-router-dom";
//imports CSS styling
import "./style.css";

//Nav class to extend the component (aka use the foundation of the component)
class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  // if statement to update view if false 
  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

// update state
    this.setState(newState);
  };

// update state toggle view
  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

// function override for when the component is mounted
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

// function override for when the component is unmounted
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

//code setting up nav HTML/JSX
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

//exports Nav code so that other files can use it
export default Nav;
