import React, { Component } from "react";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';

export default class Check extends Component {
  render() {
    let { state } = this.props;
    return (
      <div className="Check">
        {state && (
          <svg viewBox="0 0 32 32" className="checked">
            <circle
              stroke="currentColor"
              strokeWidth="inherit"
              cx="16"
              cy="16"
              r="15"
              data-reactid="377"
            />
            <polyline
              stroke="currentColor"
              strokeWidth="inherit"
              points="9,16 14,21 24,11"
            />
          </svg>
        )}
        {!state && (
          <svg viewBox="0 0 32 32" className="unchecked">
            <circle
              stroke="currentColor"
              strokeWidth="inherit"
              cx="16"
              cy="16"
              r="15"
              data-reactid="377"
            />
          </svg>
        )}
      </div>
    );
  }
}
