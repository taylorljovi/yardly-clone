import React, { Component } from "react";
import BoxImgTxt from "../components/BoxImgTxt";
import BoxTxt from "../components/BoxTxt";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';
//import FullSeasonVisit from "../components/FullSeasonVisit";

export default class DogPoopRemoval extends Component {
  state = {
    poop_removal: ""
  };
  onSelect = (state, value) => {
    let { updateForm } = this.props;

    this.setState(
      {
        [state]: value
      },
      () => {
        if (value.search("Skip") >= 0) return updateForm(state, "skip");
        updateForm(state, value);
      }
    );
  };

  componentWillMount() {
    this.setState({
      poop_removal:
        this.props.value === "skip" ? "Skip Dog Poop Removal" : this.props.value
    });
  }

  render() {
    let { poop_removal } = this.state;

    let { updateForm } = this.props;

    return (
      <section className="poop-removal">
        <h1 className="section__title">My Dog Poop Removal</h1>
        <p className="section__text">
          Dog poop picked up at the start of every visit
        </p>
        <div className="select-poop-removal">
          <BoxImgTxt
            state={[poop_removal, "poop_removal"]}
            onSelect={this.onSelect}
            bigText={"One Dog"}
            updateState={updateForm}
          />
          <BoxImgTxt
            state={[poop_removal, "poop_removal"]}
            onSelect={this.onSelect}
            bigText={"Two Dogs"}
            updateState={updateForm}
          />
          <BoxImgTxt
            state={[poop_removal, "poop_removal"]}
            onSelect={this.onSelect}
            bigText={"Three Dogs"}
            updateState={updateForm}
          />
          <BoxTxt
            state={[poop_removal, "poop_removal"]}
            width="100%"
            onSelect={this.onSelect}
            bigText={"Skip Dog Poop Removal"}
          />
        </div>
      </section>
    );
  }
}
