import React, { Component } from "react";
import BoxImgTxt from "../components/BoxImgTxt";
import BoxTxt from "../components/BoxTxt";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';

export default class DogPoopCleanUp extends Component {
  state = {
    poop_clean_up: ""
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
      poop_clean_up:
        this.props.value === "skip"
          ? "Skip Spring Dog Poop Clean Up Service"
          : this.props.value
    });
  }

  render() {
    let { poop_clean_up } = this.state;

    let { updateForm } = this.props;

    return (
      <section className="poop-clean-up">
        <h1 className="section__title">My Dog Poop Spring Clean Up Package</h1>
        <p className="section__text">
          10% savings applied if a seasonal lawn mowing plan was selected.
        </p>
        <div className="select-poop-clean-up">
          <BoxImgTxt
            state={[poop_clean_up, "poop_clean_up"]}
            onSelect={this.onSelect}
            bigText={"One Dog"}
            updateState={updateForm}
          />
          <BoxImgTxt
            state={[poop_clean_up, "poop_clean_up"]}
            onSelect={this.onSelect}
            bigText={"Two Dogs"}
            updateState={updateForm}
          />
          <BoxImgTxt
            state={[poop_clean_up, "poop_clean_up"]}
            onSelect={this.onSelect}
            bigText={"Three Dogs"}
            updateState={updateForm}
          />
          <BoxTxt
            state={[poop_clean_up, "poop_clean_up"]}
            width="100%"
            onSelect={this.onSelect}
            bigText={"Skip Spring Dog Poop Clean Up Service"}
          />
        </div>
      </section>
    );
  }
}
