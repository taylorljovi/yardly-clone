import React, { Component } from "react";
import { DayPickerRangeController } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';
import isInclusivelyAfterDay from "../utils/isInclusivelyAfterDay";

// const defaultProps = {
//     startDate: moment(),
//     endDate: moment("Sep 30", "MMM DD")
// }

export default class FlexCutVisit extends Component {
  state = {
    startDate: "",
    endDate: "",
    focusedInput: "startDate",
    interval: 7
  };

  componentWillMount() {
    let { state } = this.props;
    if (
      state[0] !== "" &&
      typeof state[0] === "object" &&
      state[0] !== undefined
    )
      this.setState({
        startDate: state[0].startDate,
        endDate: state[0].endDate,
        interval: state[0].interval
      });
  }

  onDatesChange = ({ startDate, endDate }) => {
    let { updateForm, state } = this.props;
    this.setState({ startDate, endDate });
    updateForm(state[1], {
      startDate,
      endDate,
      interval: this.state.interval
    });
  };

  onFocusChange = focusedInput => {
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  };

  updateInterval = value => {
    this.setState(
      {
        interval: value
      },
      () => {
        let { updateForm, state } = this.props;
        let { startDate, endDate, interval } = this.state;
        updateForm(state[1], {
          startDate,
          endDate,
          interval
        });
      }
    );
  };

  render() {
    const { focusedInput, interval, startDate, endDate } = this.state;
    const startDateString =
      startDate.length !== 0 ? startDate.format("MMM D") : "";
    const endDateString = endDate.length !== 0 ? endDate.format("MMM D") : "";

    return (
      <div className="flex-cut-visit">
        <p className="visit__text">
          Awesome. When would you like a Yardly Independent Service Provider to
          come mow your lawn?
        </p>
        <div className="visit-date">
          <div className="visit-date__wrapper">
            <div className="visit-start">
              <p>Start Date</p>
              <div>{startDateString}</div>
            </div>
            <div className="visit-end">
              <p>End Date</p>
              <div>{endDateString}</div>
            </div>
          </div>
          <DayPickerRangeController
            isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
            startDate={startDate}
            endDate={endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={focusedInput}
            onFocusChange={this.onFocusChange}
          />
        </div>
        <p className="visit__text">
          I want my lawn mowed every{" "}
          <input
            className="interval"
            value={interval}
            onChange={({ target }) => {
              let value = parseInt(target.value, 10);
              if (!isNaN(value)) return this.updateInterval(value);
              return this.updateInterval(0);
            }}
            type="text"
          />{" "}
          day(s)
        </p>
      </div>
    );
  }
}
// FlexCutVisit.defaultProps = defaultProps;
