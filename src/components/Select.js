import React, { Component } from "react";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';

export default class Select extends Component {
  state = {
    showDropdown: false
  };

  showDropdown() {
    let { showDropdown } = this.state;

    if (!showDropdown)
      return this.setState({
        showDropdown: true
      });

    if (showDropdown)
      return this.setState({
        showDropdown: false
      });
  }

  render() {
    let { onSelect, data, defaultValue } = this.props;
    let { showDropdown } = this.state;

    return (
      <div className="select">
        <div onClick={() => this.showDropdown()} className="selected__value">
          {defaultValue}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
          </svg>
        </div>
        <ul
          style={{ display: showDropdown ? "block" : "none" }}
          className="select__options"
        >
          {data.map((item, i) => {
            return (
              <li
                onClick={() => {
                  this.showDropdown();
                  onSelect("city", item);
                }}
                key={i}
                className="select__option"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
