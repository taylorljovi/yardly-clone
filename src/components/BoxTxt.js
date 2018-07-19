import React, { Component } from "react";
import Check from "./Check";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';

export default class BoxTxt extends Component {
  render() {
    let {
      bigText,
      startingPrice,
      state,
      smallText,
      onSelect,
      width
    } = this.props;
    return (
      <div
        style={{
          border: state[0] === bigText ? "3px solid #2d529f" : "1px solid #ccc",
          width: width,
          color: state[0] === bigText ? "#000" : "#bbbcbd"
        }}
        onClick={() => {
          onSelect(state[1], bigText);
        }}
        className="box-text"
      >
        <h1 className="box-text__text box-text__text--big">{bigText}</h1>
        {smallText && (
          <p className="box-text__text box-text__text--small">{smallText}</p>
        )}
        {startingPrice && (
          <p className="box-text__text box-text__text--small">
            {startingPrice}
          </p>
        )}
        <Check state={state[0] === bigText} />
      </div>
    );
  }
}
