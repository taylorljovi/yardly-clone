import React, { Component } from "react";
import BoxTxt from "../components/BoxTxt";
import FullSeasonVisit from "../components/FullSeasonVisit";
import FlexCutVisit from "../components/FlexCutVisit";
import OneTimeVisit from "../components/OneTimeVisit";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';

export default class ServiceLength extends Component {
  state = {
    service_length: "",
    visit_schedule: "",
    schedule: {
      display: false,
      type: 0
    }
  };
  onSelect = (state, value) => {
    let { updateForm } = this.props;

    this.setState(
      {
        [state]: value
      },
      () => {
        if (value.search("Skip") >= 0) {
          this.showschedule("skip");
          return updateForm(state, "skip");
        }
        updateForm(state, value);
        this.showschedule(value);
      }
    );
  };

  componentWillMount() {
    this.setState({
      service_length:
        this.props.value === "skip"
          ? "Skip Lawn Mowing service"
          : this.props.value,
      visit_schedule: this.props.visit_schedule
    });
  }

  showschedule = value => {
    switch (value) {
      case "Full Season":
        this.setState({
          schedule: {
            display: true,
            type: 1
          }
        });
        break;
      case "FlexCut Service":
        this.setState({
          schedule: {
            display: true,
            type: 2
          }
        });
        break;
      case "One-Time Service":
        this.setState({
          schedule: {
            display: true,
            type: 3
          }
        });
        break;
      case "skip":
        this.setState({
          schedule: {
            display: false,
            type: 0
          }
        });
        break;
      default:
        break;
    }
  };

  render() {
    let { service_length, schedule, visit_schedule } = this.state;
    let { updateForm } = this.props;
    return (
      <section className="service-length">
        <h1 className="section__title">Service Length</h1>
        <p className="section__text">
          Great! How long would you like your lawn mowing service? Receive 10%
          savings on your Spring and Fall Clean Up services when you add them
          into your Full Season Lawn Mowing plan.
        </p>
        <div className="select-service-length">
          <BoxTxt
            state={[service_length, "service_length"]}
            width="100%"
            onSelect={this.onSelect}
            bigText={"Full Season"}
            smallText={"June 6 to September 30"}
            startingPrice={"Starting at $32/visit on a monthly plan"}
          />
          <BoxTxt
            state={[service_length, "service_length"]}
            width="49%"
            onSelect={this.onSelect}
            bigText={"FlexCut Service"}
            smallText={"Set your own schedule."}
            startingPrice={"Starting at $53/Visit"}
          />
          <BoxTxt
            state={[service_length, "service_length"]}
            width="49%"
            onSelect={this.onSelect}
            bigText={"One-Time Service"}
            startingPrice={"Starting at $53/Visit"}
          />
          <BoxTxt
            state={[service_length, "service_length"]}
            width="100%"
            onSelect={this.onSelect}
            bigText={"Skip Lawn Mowing service"}
          />
        </div>
        {schedule.display && (
          <div className="schedule">
            <div className="schedule-header">
              <h1>Visit Scheduling</h1>
            </div>
            <div className="schedule-body">
              {schedule.type === 1 && (
                <FullSeasonVisit
                  state={[visit_schedule, "visit_schedule"]}
                  visit_text={
                    "Awesome. How often would you like a Yardly Independent Service Provider to come mow your lawn?"
                  }
                  updateForm={updateForm}
                />
              )}
              {schedule.type === 2 && (
                <FlexCutVisit
                  state={[visit_schedule, "visit_schedule"]}
                  updateForm={updateForm}
                />
              )}
              {schedule.type === 3 && (
                <OneTimeVisit
                  state={[visit_schedule, "visit_schedule"]}
                  updateForm={updateForm}
                />
              )}
            </div>
          </div>
        )}
      </section>
    );
  }
}
