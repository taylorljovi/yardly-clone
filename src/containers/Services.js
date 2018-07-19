import React, { Component } from "react";
import { injectStripe } from "react-stripe-elements";
import { Link } from "react-router-dom";
import "core-js/es6/map";
import "core-js/es6/set";
import City from "../screens/City";
import YardSize from "../screens/YardSize";
import ServiceLength from "../screens/ServiceLength";
import SpringPackage from "../screens/SpringPackage";
import ClippingPreference from "../screens/ClippingPreference";
import FallPackage from "../screens/FallPackage";
import DogPoopCleanUp from "../screens/DogPoopCleanUp";
import DogPoopRemoval from "../screens/DogPoopRemoval";
import GrassLength from "../screens/GrassLength";
import ContactDetails from "../screens/ContactDetails";
import PaymentDetails from "../screens/PaymentDetails";
import ReadySet from "../screens/ReadySet";
import "../css/Services.css";

class Services extends Component {
  state = {
    city: "Edmonton",
    yard: "",
    service_length: "Full Season",
    visit_schedule: "Every Week",
    spring_package: "skip",
    fall_package: "skip",
    clipping_preference: "Mulch them",
    poop_clean_up: "skip",
    poop_removal: "skip",
    grass_length: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    card_number: "",
    postal_code: "",
    expiry_date: "",
    cvc: "",
    periodic_updates: "",
    terms: "",
    additional_notes: "",
    charges: "",
    modal: false,
    loading: false
  };

  updateState = (state, value) => {
    this.setState({
      [state]: value
    });
  };

  updateContactDetails = obj => {
    this.setState({
      [obj.state]: obj.value
    });
  };

  checkForm = () => {
    let componentState = { ...this.state };
    delete componentState.city;
    delete componentState.additional_notes;
    delete componentState.periodic_updates;
    delete componentState.modal;
    delete componentState.loading;
    if (componentState.service_length === "skip") {
      delete componentState.visit_schedule;
      delete componentState.clipping_preference;
    }
    let filledInput = Object.keys(componentState).filter(
      item => !componentState[item] || componentState[item] === ""
    );

    return [
      Object.keys(componentState).length,
      Object.keys(filledInput).length,
      filledInput[0]
    ];
  };

  getVisitSchedule() {
    let { visit_schedule } = this.state;
    if (
      typeof visit_schedule === "object" &&
      Object.keys(visit_schedule).length > 1
    )
      return {
        visit: `${visit_schedule.startDate.format(
          "MMM DD YYYY"
        )} to ${visit_schedule.endDate.format("MMM DD YYYY")}`,
        interval: visit_schedule.interval
      };
    if (
      typeof visit_schedule === "object" &&
      Object.keys(visit_schedule).length === 1
    )
      return `${visit_schedule.startDate.format("MMM DD YYYY")}`;
    if (typeof visit_schedule === "string") return visit_schedule;
  }

  getMessageTemplate = () => {
    const formInput = { ...this.state };
    let visit_schedule = this.getVisitSchedule();
    return `<div><p><strong>Name : </strong>${`${formInput.first_name} ${
      formInput.last_name
    }`}</p> <p><strong>Email : </strong>${
      formInput.email
    }</p><p><strong>Phone Number : </strong>${
      formInput.phone
    }</p><p><strong>Property Address : </strong>${
      formInput.address
    }</p><p><strong>Location : </strong>${
      formInput.city
    }</p><p><strong>Yard Size : </strong>${formInput.yard}</p>${
      formInput.service_length !== "skip"
        ? `<p><strong>Service Length : </strong>${formInput.service_length}</p>`
        : ""
    }${
      formInput.service_length !== "skip"
        ? `<p><strong>Visit Schedule : </strong>${
            typeof visit_schedule === "string"
              ? visit_schedule
              : visit_schedule.visit
          }</p>`
        : ""
    }${
      typeof visit_schedule === "object" && formInput.service_length !== "skip"
        ? `<p><strong>Interval : </strong>${visit_schedule.interval}</p>`
        : ""
    }${
      formInput.service_length !== "skip"
        ? `<p> <strong>Grass Clipping Preference : </strong> ${
            formInput.clipping_preference
          }</p>`
        : ""
    }<p><strong>Spring Clean Up Package : </strong>${
      formInput.spring_package
    }</p>${
      formInput.fall_package !== "skip"
        ? `<p><strong>Fall Clean Up Package : </strong>${
            formInput.fall_package
          }</p>`
        : ""
    }${
      formInput.poop_clean_up !== "skip"
        ? `<p><strong>Dog Poop Spring Clean Up Package : </strong>${
            formInput.poop_clean_up
          }</p>`
        : ""
    }${
      formInput.poop_removal !== "skip"
        ? `<p><strong>Dog Poop Removal : </strong>${formInput.poop_removal}</p>`
        : ""
    }<p><strong>Grass Length : </strong> ${
      formInput.grass_length === `Under 8"` ? `Under 8 Inches` : `Over 8 Inches`
    }</p>${
      formInput.additional_notes !== ""
        ? `<p><strong>Additional Notes : </strong>${
            formInput.additional_notes
          }</p>`
        : ""
    }${
      formInput.periodic_updates === "on"
        ? `<p><strong>Periodic Update : </strong>${
            formInput.periodic_updates === "on" ? "Yes" : "No"
          }</p>`
        : ""
    }</div>`;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.updateState("loading", true);
    let { first_name, last_name, email } = this.state;
    let message = this.getMessageTemplate();
    let url = "https://yardly-clone.herokuapp.com/email";
    this.props.stripe
      .createToken({ name: `${first_name} ${last_name}` })
      .then(({ token: { id } }) => {
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          body: JSON.stringify({ email, message, stripe_token: id, amount: 34 })
        }).then(res => {
          if (res.status)
            return this.setState({
              loading: false,
              modal: true
            });
          return this.setState({
            loading: false,
            modal: false
          });
        });
      })
      .catch(error => console.error(`Fetch Error =\n`, error));
  };

  getLawnTotal(y, b, d) {
    let c = Math.floor(y / 1000) - 1;
    return b + d * c;
  }
  getDogPoopTotal(y, b, d) {
    switch (y) {
      case "One Dog":
        y = 1;
        break;
      case "Two Dogs":
        y = 2;
        break;
      case "Three Dogs":
        y = 3;
        break;
      default:
        break;
    }
    let c = y - 1;
    return b + d * c;
  }

  getPrices = () => {
    let {
      yard,
      service_length,
      visit_schedule,
      clipping_preference,
      fall_package,
      spring_package,
      poop_clean_up,
      poop_removal
    } = this.state;
    let lawnMowing =
      service_length !== "skip"
        ? service_length === "Full Season"
          ? visit_schedule === "Every Week"
            ? clipping_preference === "Mulch them"
              ? this.getLawnTotal(yard, 31, 4).toFixed(2)
              : this.getLawnTotal(yard, 34, 5).toFixed(2)
            : this.getLawnTotal(yard, 49, 5).toFixed(2)
          : this.getLawnTotal(yard, 53, 6).toFixed(2)
        : null;

    let fall =
      fall_package !== "skip"
        ? fall_package === "Standard Package"
          ? this.getLawnTotal(yard, 143, 17).toFixed(2)
          : this.getLawnTotal(yard, 199, 20).toFixed(2)
        : null;
    let spring =
      spring_package !== "skip"
        ? spring_package === "Standard Package"
          ? this.getLawnTotal(yard, 143, 17).toFixed(2)
          : this.getLawnTotal(yard, 199, 20).toFixed(2)
        : null;
    let dogPoopC =
      poop_clean_up !== "skip"
        ? this.getDogPoopTotal(poop_clean_up, 109.99, 40).toFixed(2)
        : null;
    let dogPoopR =
      poop_removal !== "skip"
        ? visit_schedule !== "Every Other Week"
          ? this.getDogPoopTotal(poop_removal, 14.99, 3).toFixed(2)
          : this.getDogPoopTotal(poop_removal, 33.99, 6).toFixed(2)
        : null;
    return {
      lawnMowing,
      spring,
      fall,
      dogPoopC,
      dogPoopR
    };
  };

  render() {
    let {
      city,
      yard,
      service_length,
      visit_schedule,
      clipping_preference,
      spring_package,
      fall_package,
      poop_clean_up,
      poop_removal,
      grass_length,
      terms,
      periodic_updates,
      charges,
      modal,
      loading
    } = this.state;

    let [allInputs, emptyInputs] = this.checkForm();

    let prices = this.getPrices();

    return (
      <main className="Services">
        <form onSubmit={e => this.handleSubmit(e)}>
          <City value={city} updateForm={this.updateState} />

          <YardSize value={yard} updateForm={this.updateState} />

          <ServiceLength
            value={service_length}
            visit_schedule={visit_schedule}
            updateForm={this.updateState}
          />

          {service_length !== "skip" && (
            <ClippingPreference
              value={clipping_preference}
              updateForm={this.updateState}
            />
          )}
          <SpringPackage value={spring_package} updateForm={this.updateState} />

          <FallPackage value={fall_package} updateForm={this.updateState} />

          <DogPoopCleanUp value={poop_clean_up} updateForm={this.updateState} />

          <DogPoopRemoval value={poop_removal} updateForm={this.updateState} />

          <GrassLength value={grass_length} updateForm={this.updateState} />

          <ContactDetails
            value={periodic_updates}
            updateForm={this.updateContactDetails}
          />

          <PaymentDetails updateForm={this.updateState} />

          <ReadySet value={{ terms, charges }} updateForm={this.updateState} />

          {allInputs - emptyInputs >= 1 &&
            yard &&
            (service_length !== "skip" ||
              prices.fall !== null ||
              prices.spring !== null ||
              prices.dogPoopR !== null ||
              prices.dogPoopC !== null) && (
              <section className="navigation">
                <div className="summary">
                  <div className="progress__bar">
                    <div
                      style={{
                        width: `${((allInputs - emptyInputs) / allInputs) *
                          100}%`
                      }}
                      className="progress"
                    />
                  </div>
                  <div className="service__fee-box">
                    {prices.lawnMowing !== null && (
                      <div className="service__fee">
                        <span className="service">Lawn Mowing</span>
                        <span className="service-charge">{`$${
                          prices.lawnMowing
                        }`}</span>
                        <span className="visit">+GST / Visit</span>
                      </div>
                    )}
                    {prices.spring !== null && (
                      <div className="service__fee">
                        <span className="service">Spring Clean Up</span>
                        <span className="service-charge">{`$${
                          prices.spring
                        }`}</span>
                        <span className="visit">+GST / Visit</span>
                      </div>
                    )}

                    {prices.fall !== null && (
                      <div className="service__fee">
                        <span className="service">Fall Clean Up</span>
                        <span className="service-charge">{`$${
                          prices.fall
                        }`}</span>
                        <span className="visit">+GST / Visit</span>
                      </div>
                    )}

                    {prices.dogPoopC !== null && (
                      <div className="service__fee">
                        <span className="service">Dog Poop Clean Up</span>
                        <span className="service-charge">{`$${
                          prices.dogPoopC
                        }`}</span>
                        <span className="visit">+GST / Visit</span>
                      </div>
                    )}

                    {prices.dogPoopR !== null && (
                      <div className="service__fee">
                        <span className="service">Dog Poop Removal</span>
                        <span className="service-charge">{`$${
                          prices.dogPoopR
                        }`}</span>
                        <span className="visit">+GST / Visit</span>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  disabled={emptyInputs !== 0 ? true : false}
                  className="nav__next"
                >
                  Let's Go!
                </button>
              </section>
            )}
        </form>
        {modal && (
          <div className="success__modal">
            <div className="modal__body">
              <div
                onClick={() =>
                  modal
                    ? this.updateState("modal", false)
                    : this.updateState("modal", true)
                }
                className="modal__close"
              >
                &times;
              </div>
              <p className="success__message">
                Awesome! Thanks for your order! An order summary will be sent to
                you shortly with more details.
              </p>
              <p className="success__message">
                In the mean time, feel free to head back to{" "}
                <Link to="/">
                  <strong>our website.</strong>
                </Link>
              </p>
              <p className="success__message">Thanks again!</p>
            </div>
          </div>
        )}
        {loading && (
          <div className="working">
            Working <span className="loading">...</span>
          </div>
        )}
      </main>
    );
  }
}

export default injectStripe(Services);
