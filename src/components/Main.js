import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Pricing from "../containers/Pricing";
import Help from "../containers/Help";
import Home from "../containers/Home";
import { StripeProvider, Elements } from "react-stripe-elements";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';
import InjectedServices from "../containers/Services";

class Main extends Component {
  state = {
    stripe: null
  };

  componentWillMount() {
    if (window.Stripe) {
      this.setState({
        stripe: window.Stripe("pk_test_uhIlJNz6ER9RSOQ4UDFCNea8")
      });
    } else {
      document.querySelector("#stripe-js").addEventListener("load", () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({
          stripe: window.Stripe("pk_test_uhIlJNz6ER9RSOQ4UDFCNea8")
        });
      });
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/pricing" render={props => <Pricing {...props} />} />
        <Route path="/help" render={props => <Help {...props} />} />
        <Route
          path="/services"
          render={props => (
            <StripeProvider stripe={this.state.stripe}>
              <Elements>
                <InjectedServices {...props} />
              </Elements>
            </StripeProvider>
          )}
        />Pricing
      </Switch>
    );
  }
}

export default Main;
