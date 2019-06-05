import React, { Component } from "react";
import logo from "../assets/img/logo.png";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="lni-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
              <li className="nav-item active">
                <a href="/#hero-area" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/#feature" className="nav-link">
                  Feature
                </a>
              </li>
              <li className="nav-item">
                <a href="/#services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="/#team" className="nav-link">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a href="/#pricing" className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="/#portfolios" className="nav-link">
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a href="/#testimonial" className="nav-link">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a href="/#blog" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="/#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
