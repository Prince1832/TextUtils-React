import React from "react";
import PropTypes from "prop-types";
// import {Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/"></Link>*/}
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/"></Link> */}
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about"> </Link>*/}
              <a className="nav-link" href="#">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <form className="d-flex mx-5" role="search">
            <div classNameName="form-check form-switch">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  onClick={props.togglemode}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className={`form-check-label text-${
                    props.mode === "white" ? "black" : "white"
                  }`}
                  htmlFor="flexSwitchCheckDefault">
                  {props.mode === 'white'? 'Enable dark mode': 'Enable light mode'}
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };

// Navbar.propTypes = {title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired}

Navbar.defaultProps = { title: "set title here", aboutText: "About text here" };

Navbar.defaultProps = { title: "set title here", aboutText: "About" };
