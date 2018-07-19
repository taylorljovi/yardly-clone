import React, { Component } from "react";
import BoxMulTxt from "../components/BoxMulTxt";
import BoxTxt from "../components/BoxTxt";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';

export default class City extends Component {
  state = {
    fall_package: ""
  };

  onSelect = (state, value) => {
    let { updateForm } = this.props;

    this.setState(
      {
        [state]: value
      },
      () => {
        if (value.search("Skip") >= 0) return updateForm(state, "skip");
        return updateForm(state, value);
      }
    );
  };

  componentWillMount() {
    this.setState({
      fall_package:
        this.props.value === "skip"
          ? "Skip Fall Clean Up service"
          : this.props.value
    });
  }

  render() {
    let { fall_package } = this.state;
    return (
      <section className="spring-package">
        <h1 className="section__title">My Fall Clean Up Package</h1>
        <p className="section__text">
          10% savings applied if a seasonal lawn mowing plan was selected.
        </p>
        <div className="select-spring-package">
          <BoxMulTxt
            state={[fall_package, "fall_package"]}
            width="49%"
            onSelect={this.onSelect}
            bigText={"Standard Package"}
            smallText={[
              "Final Mow & Trim",
              "Leaf & Debris Cleanup from turf surface",
              "Rock garden and flower bed blowout"
            ]}
          />
          <BoxMulTxt
            state={[fall_package, "fall_package"]}
            width="49%"
            onSelect={this.onSelect}
            bigText={"Premium Package"}
            smallText={[
              "Everything in Standard Package",
              "Core Aeration",
              "Fertilization",
              "Power Edging (250 ft included)"
            ]}
          />
          <BoxTxt
            state={[fall_package, "fall_package"]}
            width="100%"
            onSelect={this.onSelect}
            bigText={"Skip Fall Clean Up service"}
          />
        </div>
      </section>
    );
  }
}
