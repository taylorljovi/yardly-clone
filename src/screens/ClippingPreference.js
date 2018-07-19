import React, { Component } from "react";
import BoxImgTxt from "../components/BoxImgTxt";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';

export default class ClippingPreference extends Component {
  state = {
    clipping_preference: ""
  };
  onSelect = (state, value) => {
    let { updateForm } = this.props;

    this.setState(
      {
        [state]: value
      },
      () => {
        updateForm(state, value);
      }
    );
  };

  componentWillMount() {
    this.setState({
      clipping_preference: this.props.value
    });
  }

  render() {
    let { clipping_preference } = this.state;
    return (
      <section className="clipping-preference">
        <h1 className="section__title">Grass Clipping Preference</h1>
        <p className="section__text">
          You can choose to mulch the grass clippings when you select weekly
          plan (great for a healthy lawn) or have them bagged up for removal by
          your municipality.
        </p>
        <div className="select-clipping-preference">
          <BoxImgTxt
            state={[clipping_preference, "clipping_preference"]}
            onSelect={this.onSelect}
            bigText={"Mulch them"}
            img={"./images/mulch_them.png"}
          />
          <BoxImgTxt
            state={[clipping_preference, "clipping_preference"]}
            onSelect={this.onSelect}
            bigText={"Bag'em up!"}
            img={"./images/bag_them.png"}
          />
        </div>
      </section>
    );
  }
}
