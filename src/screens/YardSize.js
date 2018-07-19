import React, { Component } from "react";
import BoxImgTxt from "../components/BoxImgTxt";
import BoxTxtInput from "../components/BoxTxtInput";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';

export default class YardSize extends Component {
  state = {
    yard: ""
  };

  onSelect = (state, value) => {
    this.setState({
      [state]: value
    });
  };

  // componentWillMount() {
  //   this.initSize(this.props.value);
  // }

  // initSize(value) {
  //   if (value <= 1500)
  //     return this.setState({
  //       yard: "Small Yard"
  //     });
  //   if (value === 2500)
  //     return this.setState({
  //       yard: "Average Yard"
  //     });
  //   if (value === 3500)
  //     return this.setState({
  //       yard: "Big Yard"
  //     });
  //   if (value === 4500)
  //     return this.setState({
  //       yard: "Very Big Yard"
  //     });
  //   if (
  //     value <= 1500 ||
  //     value !== "" ||
  //     value !== 2500 ||
  //     value !== 3500 ||
  //     value !== 4500
  //   )
  //     return this.setState({
  //       yard: "Custom Yard Size"
  //     });
  // }

  render() {
    let { yard } = this.state;

    let { updateForm, value: yard_size } = this.props;

    return (
      <section className="yard-size">
        <h1 className="section__title">My Yard Size</h1>
        <p className="section__text">
          First, we just need a rough estimate of your yard size. If you don't
          know the measurements, please use your best guess. We may need to
          update the price based on our accurate measurement through satellite
          images.
        </p>
        <div className="select-yard-size">
          <BoxImgTxt
            state={[yard, "yard"]}
            onSelect={this.onSelect}
            img={"./images/yard1.png"}
            bigText={"Small Yard"}
            smallText={"1500 sqft or less"}
            updateState={updateForm}
            size={1500}
          />
          <BoxImgTxt
            state={[yard, "yard"]}
            onSelect={this.onSelect}
            img={"./images/yard2.png"}
            bigText={"Average Yard"}
            smallText={"up to 2500 sqft"}
            updateState={updateForm}
            size={2500}
          />
          <BoxImgTxt
            state={[yard, "yard"]}
            onSelect={this.onSelect}
            img={"./images/yard3.png"}
            bigText={"Big Yard"}
            smallText={"up to 3500 sqft"}
            updateState={updateForm}
            size={3500}
          />
          <BoxImgTxt
            state={[yard, "yard"]}
            onSelect={this.onSelect}
            img={"./images/yard4.png"}
            bigText={"Very Big Yard"}
            smallText={"up to 4500 sqft"}
            updateState={updateForm}
            size={4500}
          />
          <BoxTxtInput
            state={[yard, "yard"]}
            value={yard_size}
            updateState={updateForm}
            onChange={updateForm}
            onSelect={this.onSelect}
            bigText={"Custom Yard Size"}
            smallText={"Enter approximate square footage"}
          />
        </div>
      </section>
    );
  }
}
