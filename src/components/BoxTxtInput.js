import React, { Component } from "react";
import Check from "./Check";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';

export default class BoxTxtInput extends Component {
  render() {
    let {
      state,
      bigText,
      value,
      smallText,
      onSelect,
      updateState
    } = this.props;
    value = state[0] === bigText ? value : "";
    return (
      <div
        style={{
          border: state[0] === bigText ? "3px solid #2d529f" : "1px solid #ccc",
          color: state[0] === bigText ? "#000" : "#bbbcbd"
        }}
        onClick={() => {
          if (state[0] === bigText) return null;
          onSelect(state[1], bigText);
          updateState(state[1], "");
        }}
        className="box-text-input"
      >
        <h1 className="box-text-input__text box-text-input__text--big">
          {bigText}
        </h1>
        <p className="box-text-input__text box-text-input__text--small">
          {smallText}
        </p>
        <input
          type="tel"
          onChange={({ target }) => {
            let value = parseInt(target.value, 10);
            if (!isNaN(value)) updateState(state[1], value);
            if (target.value === "") updateState(state[1], target.value);
          }}
          value={value}
          placeholder="Approximate area (sqft)"
          className="__input"
        />
        <Check state={state[0] === bigText} />
      </div>
    );
  }
}
