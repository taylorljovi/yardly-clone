import React, { Component } from "react";
import { Link } from "react-router-dom";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';
import "../css/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="section">
          <div className="contact-info">
            <Link className="logo" to="/">
              Logo
            </Link>
            <p>
              <Link to="tel:18556888277">1‑855‑688‑8277</Link>
            </p>
            <p>
              <Link to="mailto:hello@yardly.ca">hello@yardly.ca</Link>
            </p>
            <p className="copyright">Copyright © 2018</p>
          </div>
          <nav className="footer-nav">
            <ul className="footer-nav-list footer-nav-list--1">
              <li className="footer-footer-nav-item ex">
                <Link className="footer-nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="footer-footer-nav-item">
                <Link className="footer-nav-link" to="/help">
                  Help
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link className="footer-nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
            </ul>
            <ul className="footer-nav-list footer-nav-list--2">
              <li className="footer-nav-item">
                <Link className="footer-nav-link" to="/terms-of-use">
                  Terms of Use
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link className="footer-nav-link" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <ul className="footer-nav-list footer-nav-list--3">
              <li className="footer-nav-item">
                <Link className="footer-nav-link" to="#">
                  <i className="fab fa-facebook" />
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link className="footer-nav-link" to="#">
                  <i className="fab fa-twitter-square" />
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link className="footer-nav-link" to="#">
                  <i className="fab fa-google-plus-square" />
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link className="footer-nav-link" to="#">
                  <i className="fab fa-linkedin" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
}
