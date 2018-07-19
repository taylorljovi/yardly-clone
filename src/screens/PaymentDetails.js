import React, { Component } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement
} from "react-stripe-elements";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';

export default class PaymentDetails extends Component {
  render() {
    let { updateForm } = this.props;
    return (
      <section className="payment-details">
        <h1 className="section__title">My Payment Details</h1>
        <div className="payment-details-input">
          <CardNumberElement
            onChange={e => {
              if (e.complete) {
                updateForm("card_number", e.complete);
              }
            }}
          />
          <CardExpiryElement
            onChange={e => {
              if (e.complete) {
                updateForm("expiry_date", e.complete);
              }
            }}
          />
          <CardCVCElement
            onChange={e => {
              if (e.complete) {
                updateForm("cvc", e.complete);
              }
            }}
          />
          <PostalCodeElement
            onChange={e => {
              if (e.complete) {
                updateForm("postal_code", e.complete);
              }
            }}
          />
        </div>
        <div className="disclaimer">
          <div className="disclaimer__icon">
            <img
              src="./images/icon-security-shield.png"
              alt="secure payment!"
            />
          </div>
          <div className="disclaimer__text">
            <p>
              Your billing information is not stored by us, and is transferred
              over an encrypted connection to certified third party payment
              processing servers. The technology is the same used by online
              banking, so you can rest assured that it's safe.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
