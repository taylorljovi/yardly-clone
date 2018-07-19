import React, { Component } from "react";
import { Link } from "react-router-dom";
import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import "../css/Header.css";

export default class Header extends Component {
  state = {
    showNav: false
  };

  showNav = () => {
    let { showNav } = this.state;
    console.log(showNav);
    if (showNav)
      return this.setState({
        showNav: false
      });
    return this.setState({
      showNav: true
    });
  };
  render() {
    let { showNav } = this.state;
    return (
      <header className="header">
        <div className="logo__box">
          <Link to="/">LOGO</Link>
        </div>
        <div className="nav-menu">
          <ul className="nav-menu__list">
            <li className="nav-menu__item">
              <Link to="/pricing" className="nav-menu__link">
                Services &amp; Pricing
              </Link>
            </li>
            <li className="nav-menu__item">
              <Link to="/help" className="nav-menu__link">
                Help
              </Link>
            </li>
            <li className="nav-menu__item">
              <Link to="tel:18556888277" className="nav-menu__link">
                1‑855‑688‑8277
              </Link>
            </li>
            <li className="nav-menu__item">
              <Link to="/services">
                <button className="nav-menu__btn btn">Order Now</button>
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={() => this.showNav()} className="mobile-nav">
          <div className={`${showNav ? "cancel-icon" : "nav-icon"}`} />
          {showNav && (
            <ul className="mobile-nav__list">
              <li className="mobile-nav__item">
                <Link to="/" className="mobile-nav__link">
                  Home
                </Link>
              </li>
              <li className="mobile-nav__item">
                <Link to="/pricing" className="mobile-nav__link">
                  Services &amp; Pricing
                </Link>
              </li>
              <li className="mobile-nav__item">
                <Link to="/help" className="mobile-nav__link">
                  Help
                </Link>
              </li>
              <li className="mobile-nav__item">
                <Link to="tel:18556888277" className="mobile-nav__link">
                  1‑855‑688‑8277
                </Link>
              </li>
            </ul>
          )}
        </div>
      </header>
    );
  }
}
