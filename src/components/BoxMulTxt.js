import React, { Component } from "react";
import Check from "./Check";
import "core-js/es6/map";
 import "core-js/es6/set"; 
import 'raf/polyfill';

export default class BoxMulTxt extends Component {
  render() {
    let { bigText, disabled, state, smallText, onSelect, width } = this.props;
    return (
      <div
        style={{
          border: state[0] === bigText ? "3px solid #2d529f" : "1px solid #ccc",
          width: width,
          color: state[0] === bigText ? "#000" : "#bbbcbd"
        }}
        onClick={() => {
          if (state[0] === bigText) return null;
          return disabled ? null : onSelect(state[1], bigText);
        }}
        className={`${disabled ? "disable" : ""} box-mul-text`}
      >
        <h1 className="box-mul-text__text box-mul-text__text--big">
          {bigText}
        </h1>
        {smallText.map((item, i) => {
          return (
            <p key={i} className="box-mul-text__text box-mul-text__text--small">
              {item}
            </p>
          );
        })}
        <Check state={state[0] === bigText} />
      </div>
    );
  }
}
