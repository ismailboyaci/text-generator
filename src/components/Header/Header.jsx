import React from "react";
import "./header.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span className="headerText">Text Generator</span>
          </a>
        </div>
        <div className="iconG">
          <a href="http://github.com/ismailboyaci">
            <i className="bi bi-github"></i>
          </a>
          <a href="http://linkedin.com/in/ismailboyaci">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
