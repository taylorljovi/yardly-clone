import React, { Component } from "react";
import Check from "./Check";
import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";

export default class BoxImgTxt extends Component {
  render() {
    let {
      img,
      state,
      updateState,
      size,
      bigText,
      smallText,
      onSelect
    } = this.props;
    return (
      <div
        style={{
          border: state[0] === bigText ? "3px solid #2d529f" : "1px solid #ccc",
          color: state[0] === bigText ? "#000" : "#bbbcbd"
        }}
        onClick={() => {
          onSelect(state[1], bigText);
          if (size) updateState(state[1], size);
        }}
        className="box-img-txt"
      >
        {img && <img className="box-img-txt__img" src={img} alt={bigText} />}
        {bigText && (
          <h1 className="box-img-txt__text box-img-txt__text--big">
            {bigText}
          </h1>
        )}
        {smallText && (
          <p className="box-img-txt__text box-img-txt__text--small">
            {smallText}
          </p>
        )}
        <Check state={state[0] === bigText} />
      </div>
    );
  }
}
