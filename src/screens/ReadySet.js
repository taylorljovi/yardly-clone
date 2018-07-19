import React, { Component } from "react";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';

export default class ReadySet extends Component {
  render() {
    let { updateForm, value } = this.props;
    return (
      <section className="ready-set">
        <h1 className="section__title">Ready, Set...</h1>
        <div className="ready-set-input">
          <textarea
            onChange={({ target }) =>
              updateForm("additional_notes", target.value)
            }
            placeholder="Additional notes, special instructions or promo codes?"
            className="__input"
          />
        </div>
        <div className="ready-set-check">
          <input
            id="check1"
            onChange={({ target }) => {
              if (value.terms === "on") return updateForm("terms", "");
              return updateForm("terms", target.value);
            }}
            type="checkbox"
          />
          <label htmlFor="check1" className="ready-set-indicator">
            <svg viewBox="0 0 32 32" className="sub__icon">
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
            <svg viewBox="0 0 32 32" className="unsub__icon">
              <circle
                stroke="currentColor"
                strokeWidth="inherit"
                cx="16"
                cy="16"
                r="15"
                data-reactid="377"
              />
            </svg>
            <span className="ready-set-text">
              I agree to the Yardly{" "}
              <a href="">
                <strong>terms of use</strong>
              </a>, and I understand the{" "}
              <a href="">
                <strong>service guidelines</strong>
              </a>
            </span>
          </label>
        </div>
        <div className="ready-set-check">
          <input
            id="check2"
            onChange={({ target }) => {
              if (value.charges === "on") return updateForm("charges", "");
              return updateForm("charges", target.value);
            }}
            type="checkbox"
          />
          <label htmlFor="check2" className="ready-set-indicator">
            <svg viewBox="0 0 32 32" className="sub__icon">
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
            <svg viewBox="0 0 32 32" className="unsub__icon">
              <circle
                stroke="currentColor"
                strokeWidth="inherit"
                cx="16"
                cy="16"
                r="15"
                data-reactid="377"
              />
            </svg>
            <span className="ready-set-text">
              I agree to the{" "}
              <a href="">
                <strong>possible surcharges and cancellation policy</strong>
              </a>.
            </span>
          </label>
        </div>
      </section>
    );
  }
}
