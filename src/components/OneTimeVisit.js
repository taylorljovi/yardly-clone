import React, { Component } from "react";
import { DayPickerRangeController } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';
import isInclusivelyAfterDay from "../utils/isInclusivelyAfterDay";

export default class OneTimeVisit extends Component {
  state = {
    startDate: "",
    focusedInput: "startDate"
  };

  componentWillMount() {
    let { state } = this.props;
    if (
      state[0] !== "" &&
      typeof state[0] === "object" &&
      state[0] !== undefined
    )
      this.setState({
        startDate: state[0].startDate
      });
  }

  onDatesChange = ({ startDate, endDate }) => {
    let { updateForm, state } = this.props;
    this.setState({ startDate });
    updateForm(state[1], {
      startDate
    });
  };

  onFocusChange = focusedInput => {
    this.setState({
      focusedInput: "startDate"
    });
  };

  render() {
    const { focusedInput, startDate } = this.state;
    const startDateString = startDate && startDate.format("MMM D");
    return (
      <div className="flex-cut-visit">
        <p className="visit__text">
          Awesome. When would you like a Yardly Independent Service Provider to
          come mow your lawn?
        </p>
        <div className="visit-date one-time">
          <div className="visit-date__wrapper">
            <div className="visit-start">
              <p>Date</p>
              <div>{startDateString}</div>
            </div>
          </div>
          <DayPickerRangeController
            isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
            startDate={startDate}
            endDate={startDate}
            onDatesChange={this.onDatesChange}
            focusedInput={focusedInput}
            onFocusChange={this.onFocusChange}
          />
        </div>
        <p className="visit__text">Service delivery within 48 hours.</p>
      </div>
    );
  }
}
