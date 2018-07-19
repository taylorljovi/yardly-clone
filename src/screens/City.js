import React, { Component } from "react";
import Select from "../components/Select";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';

export default class City extends Component {
  render() {
    let { value, updateForm } = this.props;
    return (
      <section className="location">
        <p className="note">
          Please select from the services listed below which are available
          through the Yardly platform. Bundle a Spring Clean Up and Fall Clean
          Up with your Full Season Lawn Mowing services for the best savings!
          Weather permitting, Spring Clean Up Services are available between
          April 15 and May 31 while Fall Clean Up Services are available between
          October 1 and November 15.
        </p>
        <p className="location__text">I am ordering lawn services for:</p>
        <Select
          onSelect={updateForm}
          defaultValue={value}
          data={["Edmonton", "Calgary", "Winnipeg"]}
        />
      </section>
    );
  }
}
