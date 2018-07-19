import React, { Component } from "react";
import BoxImgTxt from "../components/BoxImgTxt";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';

export default class ClippingPreference extends Component {
  state = {
    grass_length: ""
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
      grass_length: this.props.value
    });
  }

  render() {
    let { grass_length } = this.state;
    return (
      <section className="grass-length">
        <h1 className="section__title">My Grass Length</h1>
        <div className="select-grass-length">
          <BoxImgTxt
            state={[grass_length, "grass_length"]}
            onSelect={this.onSelect}
            bigText={`Under 8"`}
            img={"./images/short-grass.png"}
          />
          <BoxImgTxt
            state={[grass_length, "grass_length"]}
            onSelect={this.onSelect}
            bigText={`Over 8"`}
            img={"./images/tall-grass.png"}
          />
        </div>
        <p className="section__text">
          For the first service visit, grass over 8" in length is subject to
          additional charges based on an assessment of your property.
        </p>
      </section>
    );
  }
}
