import React, { Component } from "react";
import BoxImgTxt from "./BoxImgTxt";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';

export default class FullSeasonVisit extends Component {
  state = {
    visit_schedule: ""
  };

  onSelect = (state, value) => {
    let { updateForm, state: prop_state } = this.props;

    this.setState(
      {
        [state]: value
      },
      () => {
        return updateForm(prop_state[1], value);
      }
    );
  };

  componentWillMount() {
    this.setState({
      visit_schedule: this.props.state[0]
    });
  }

  render() {
    let { visit_schedule } = this.state;

    return (
      <div className="full-season-visit">
        <p className="visit__text">{this.props.visit_text}</p>
        <div className="visit-select">
          <BoxImgTxt
            state={[visit_schedule, "visit_schedule"]}
            onSelect={this.onSelect}
            img={"./images/calenderweek.png"}
            bigText={"Every Week"}
          />
          <BoxImgTxt
            state={[visit_schedule, "visit_schedule"]}
            onSelect={this.onSelect}
            img={"./images/calenderotherweek.png"}
            bigText={"Every Other Week"}
          />
        </div>
      </div>
    );
  }
}
