import React, { Component } from "react";
import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";

export default class ContactDetails extends Component {
  render() {
    const { updateForm, value } = this.props;
    return (
      <section className="contact-details">
        <div className="property-address">
          <h1 className="section__title">My Property Address</h1>
          <div className="contact-details-input">
            <input
              onChange={({ target }) =>
                updateForm({ value: target.value, state: "address" })
              }
              type="address"
              placeholder="House number, Street, City, Postal Code"
              className="__input"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="contact-info">
          <h1 className="section__title">My Contact Info</h1>
          <div className="contact-details-input">
            <input
              onChange={({ target }) =>
                updateForm({ value: target.value, state: "first_name" })
              }
              type="text"
              placeholder="First Name"
              className="__input"
              autoComplete="off"
            />
            <input
              onChange={({ target }) =>
                updateForm({ value: target.value, state: "last_name" })
              }
              type="text"
              placeholder="Last Name"
              className="__input"
              autoComplete="off"
            />
            <input
              onChange={({ target }) =>
                updateForm({ value: target.value, state: "email" })
              }
              type="email"
              placeholder="Email Address"
              className="__input"
              autoComplete="off"
            />
            <input
              onChange={({ target }) =>
                updateForm({ value: target.value, state: "phone" })
              }
              type="tel"
              placeholder="Phone Number"
              className="__input"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="subscription">
          <input
            onChange={({ target }) => {
              if (value === "on")
                return updateForm({ value: "", state: "periodic_updates" });
              return updateForm({
                value: target.value,
                state: "periodic_updates"
              });
            }}
            id="check"
            type="checkbox"
          />
          <label htmlFor="check" className="subscription-indicator">
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
            <span className="subscription-text">
              Receive periodic updates and promotions from Yardly
            </span>
          </label>
        </div>
      </section>
    );
  }
}
