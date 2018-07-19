import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'core-js/es6/map';
import 'core-js/es6/set';
import "../css/Help.css";

export default class Help extends Component {
  render() {
    return (
      <main className="Help">
        <div className="section-header">
          <h1 className="title">Frequenty Asked Questions</h1>
        </div>
        <section className="general-faq" id="general-faq">
          <div className="questions">
            <h2 className="title" id="general-questions">
              General Questions
            </h2>
            <dl className="question-list">
              <dt className="question" id="what-is-yardly">
                What is Yardly?
              </dt>
              <dl className="answer">
                Yardly is a service platform that connects homeowners and
                property managers with vetted and insured local contractors.
                Yardly uses technology to simplify your experience to order snow
                removal and lawn care services throughout the year.
              </dl>
              <dt className="question" id="what-services-does-yardly-offer">
                What services does Yardly offer?
              </dt>
              <dl className="answer">
                Yardly offers a variety of services on the platform which
                include Spring and Fall Clean Ups, lawn mowing, and snow
                removal. Find out more information on our services
                <a id="faq-pricing-help" href="/services-pricing-winnipeg/">
                  here
                </a>.
              </dl>
              <dt className="question" id="how-do-you-decide-your-prices">
                How do you decide your prices?
              </dt>
              <dl className="answer">
                All of our prices are competitive and are determined after
                extensive market research in your area. They are usually based
                upon the size of the work area, and the conditions of your
                property. Click
                <a href="https://yardly.ca/order/?d=c291cmNlPXdlYnF1b3Rl">
                  here
                </a>
                to get the price for your property.
              </dl>
              <dt className="question" id="can-i-see-my-price-before-i-order">
                Can I see my price before I order?
              </dt>
              <dl className="answer">
                Absolutely. Before you submit an order on the app you get a
                rough price estimate and can choose whether to proceed or not.
                Alternatively, you can
                <a href="https://yardly.ca/order/?d=c291cmNlPXdlYnF1b3Rl">
                  get a quote
                </a>
                on our website.
              </dl>
            </dl>
            <h2 className="title" id="using-yardly">
              Using Yardly
            </h2>
            <dl className="question-list">
              <dt className="question" id="where-can-i-get-the-yardly-app">
                Where can I get the Yardly app?
              </dt>
              <dl className="answer">
                The Yardly app is available for free on the App Store for
                iPhones and on Google Play for Android.
              </dl>
              <dt className="question" id="how-do-i-create-an-account">
                How do I create an account?
              </dt>
              <dl className="answer">
                Simply download the app and register with your phone number or
                email address. Alternatively, you can
                <a href="http://yardly.ca/order">order through the website</a>
                or call us at <a href="tel:18556888277">1‑855‑688‑8277</a> and
                we’d be happy to take your order over the phone.
              </dl>
              <dt
                className="question"
                id="what-kind-of-information-do-i-need-to-provide-to-yardly"
              >
                What kind of information do I need to provide to Yardly?
              </dt>
              <dl className="answer">
                All we need from you is basic contact (name, e-mail, address)
                and property info (rough size of lawn). Payments are billed
                directly to your credit card and our
                <a href="https://yardly.ca/privacy-policy">privacy policy</a>
                ensures that any and all of the information you provide us with
                is safe and secure.
              </dl>
              <dt
                className="question"
                id="i-have-placed-an-order-what-happens-next"
              >
                I have placed an order. What happens next?
              </dt>
              <dl className="answer">
                Your part is done! You will receive an order confirmation via
                email, and your property will be serviced as specified.
              </dl>
              <dt
                className="question"
                id="do-i-have-to-be-home-for-the-service"
              >
                Do I have to be home for the service?
              </dt>
              <dl className="answer">
                No. As long as the Independent Service Provider has access to
                the areas that need to be serviced, they will be able to service
                it fully.
              </dl>
              <dt
                className="question"
                id="can-i-order-yardly-for-a-friend-what-if-i-have-multiple-properties"
              >
                Can I order Yardly for a friend? What if I have multiple
                properties?
              </dt>
              <dl className="answer">
                Absolutely. We accept multiple addresses in the app and you can
                request on demand or recurring service for any one of your
                properties or friends.
              </dl>
              <dt
                className="question"
                id="what-kind-of-service-plan-does-yardly-offer-do-you-have-recurring-services"
              >
                What kind of service plan does Yardly offer? Do you have
                recurring services?
              </dt>
              <dl className="answer">
                Yardly offers two flexible service plans.<ul className="standard-bullets">
                  <li>
                    On Demand: Order professional lawn care or snow removal
                    services whenever you need them.
                  </li>
                  <li>
                    Recurring: Pick a start and end date and get your services
                    on a recurring basis. Just set it and forget it.
                  </li>
                </ul>
              </dl>
              <dt className="question" id="when-and-how-will-i-be-charged">
                When and how will I be charged?
              </dt>
              <dl className="answer">
                All payments will be charged directly to your credit card as
                soon as your on demand or Clean Up order is completed. If you’re
                on our lawn mowing recurring plan, you get billed each time your
                lawn is mowed. If you are on our SnowWatch plan, your card will
                get billed each time a visit is made. If you are on our monthly
                snow removal plan, you will get charged at the beginning of the
                month.
              </dl>
              <dt
                className="question"
                id="how-long-will-it-take-a-provider-to-get-to-my-house"
              >
                How long will it take a provider to get to my house?
              </dt>
              <dl className="answer">
                Timing for your service is dependent on the type of service
                ordered, and will be specified in your order confirmation. On
                demand orders are usually serviced within 24 hours.
              </dl>
              <dt className="question" id="can-i-order-without-using-the-app">
                Can I order without using the app?
              </dt>
              <dl className="answer">
                Yes. Give us a call at
                <a href="tel:18556888277" id="help-page--faq--phone-number-2">
                  1‑855‑688‑8277
                </a>
                or place an
                <a href="http://yardly.ca/order">order through our website</a>
                and we’ll be happy to manually place your order for you.
              </dl>
              <dt
                className="question"
                id="who-else-sees-the-information-i-share-with-yardly-is-my-payment-information-secure"
              >
                Who else sees the information I share with Yardly? Is my payment
                information secure?
              </dt>
              <dl className="answer">
                Yardly’s extensive <a href="/privacy-policy">privacy policy</a>
                ensures that your information is safe and secure and isn’t
                shared to any third parties whatsoever. We use
                <a href="http://stripe.com" target="blank">
                  Stripe
                </a>
                to securely store and process sensitive transactions.
              </dl>
              <dt
                className="question"
                id="how-will-i-know-when-work-is-completed-if-i-rsquo-m-not-home"
              >
                How will I know when work is completed if I’m not home?
              </dt>
              <dl className="answer">
                Upon request, Yardly sends pictures of your freshly mowed lawn
                directly to your email when the work is completed.
              </dl>
              <dt className="question" id="what-happens-if-it-rains">
                What happens if it rains?
              </dt>
              <dl className="answer">
                Depending on the amount of rain, service will be delayed until
                your lawn is sufficiently dry. We don’t want to cause any damage
                to your property or compromise the quality of your cut.
              </dl>
            </dl>
            <h2 className="title" id="yardly-s-service-providers">
              Yardly's Service Providers
            </h2>
            <dl className="question-list">
              <dt
                className="question"
                id="how-does-yardly-vet-its-independent-service-providers-what-kind-of-credentials-do-they-have"
              >
                How does Yardly vet its Independent Service Providers? What kind
                of credentials do they have?
              </dt>
              <dl className="answer">
                All Yardly Independent Service Providers have professional lawn
                mowing and snow removal experience in your community. They are
                required to submit identification documents, and must undergo a
                criminal background check.
              </dl>
              <dt className="question" id="can-i-rate-my-service-partners">
                Can I rate my service partners?
              </dt>
              <dl className="answer">
                Absolutely. We encourage you to give us as much feedback as
                possible so that we can continue to make Yardly the best it can
                be. After your service is complete, you will receive an email
                prompting you to rate the Independent Service Provider’s quality
                of work.
              </dl>
              <dt
                className="question"
                id="how-do-i-become-a-yardly-independent-service-provider"
              >
                How do I become a Yardly Independent Service Provider?
              </dt>
              <dl className="answer">
                Visit our
                <a href="https://yardly.ca/become-a-provider/">
                  Become a Provider page
                </a>
                for more information.
              </dl>
            </dl>
            <h2 className="title" id="customer-service-complaints">
              Customer Service &amp; Complaints
            </h2>
            <dl className="question-list">
              <dt
                className="question"
                id="what-if-i-am-unhappy-with-the-service"
              >
                What if I am unhappy with the service?
              </dt>
              <dl className="answer">
                Customer satisfaction is our top concern. In addition to leaving
                a provider review, please contact our customer support email
                address at <a href="mailto:hello@yardly.ca">hello@yardly.ca</a>.
                We respond to all customer complaints and inquiries promptly.
              </dl>
              <dt
                className="question"
                id="i-think-my-property-has-been-damaged-by-a-yardly-service-provider-what-do-i-do"
              >
                I think my property has been damaged by a Yardly service
                provider, what do I do?
              </dt>
              <dl className="answer">
                Yardly takes the safety of our customers and their property very
                seriously. In the event that you believe that one of Yardly’s
                service providers damaged your property please take the
                following steps:<ol>
                  <li>
                    Take a detailed photo of the area you believe that one of
                    Yardly’s service providers damaged.
                  </li>
                  <li>
                    Immediately contact Yardly’s customer support team at
                    <a href="mailto:hello@yardly.ca">hello@yardly.ca</a> with a
                    photograph and detailed description of the incident. A
                    customer support representative will contact you shortly
                    thereafter.
                  </li>
                  <li>
                    Your part is done. Yardly will conduct a thorough
                    investigation of the incident. We will keep you informed
                    every step of the way so that we find a fair and reasonable
                    solution.
                  </li>
                </ol>
              </dl>
              <dt
                className="question"
                id="i-m-having-trouble-with-the-app-who-should-i-contact"
              >
                I'm having trouble with the app, who should I contact?
              </dt>
              <dl className="answer">
                Give us a call at
                <a href="tel:18556888277" id="help-page--faq--phone-number-3">
                  1‑855‑688‑8277
                </a>
                or shoot us an email
                <a
                  href="mailto:hello@yardly.ca"
                  id="help-page--faq--email-address-5"
                >
                  hello@yardly.ca
                </a>
                and we’ll be happy to help you with any difficulties you’re
                having with the app.
              </dl>
            </dl>
          </div>
          <nav className="faq-nav" id="faq-nav">
            <ul className="categories">
              <li className="category" data-target="general-questions">
                <span className="linktext">General Questions</span>
                <ul className="questions">
                  <li className="question" data-target="what-is-yardly">
                    What is Yardly?
                  </li>
                  <li
                    className="question"
                    data-target="what-services-does-yardly-offer"
                  >
                    What services does Yardly offer?
                  </li>
                  <li
                    className="question"
                    data-target="how-do-you-decide-your-prices"
                  >
                    How do you decide your prices?
                  </li>
                  <li
                    className="question"
                    data-target="can-i-see-my-price-before-i-order"
                  >
                    Can I see my price before I order?
                  </li>
                </ul>
              </li>
              <li className="category" data-target="using-yardly">
                <span className="linktext">Using Yardly</span>
                <ul className="questions">
                  <li
                    className="question"
                    data-target="where-can-i-get-the-yardly-app"
                  >
                    Where can I get the Yardly app?
                  </li>
                  <li
                    className="question"
                    data-target="how-do-i-create-an-account"
                  >
                    How do I create an account?
                  </li>
                  <li
                    className="question"
                    data-target="what-kind-of-information-do-i-need-to-provide-to-yardly"
                  >
                    What kind of information do I need to provide to Yardly?
                  </li>
                  <li
                    className="question"
                    data-target="i-have-placed-an-order-what-happens-next"
                  >
                    I have placed an order. What happens next?
                  </li>
                  <li
                    className="question"
                    data-target="do-i-have-to-be-home-for-the-service"
                  >
                    Do I have to be home for the service?
                  </li>
                  <li
                    className="question"
                    data-target="can-i-order-yardly-for-a-friend-what-if-i-have-multiple-properties"
                  >
                    Can I order Yardly for a friend? What if I have multiple
                    properties?
                  </li>
                  <li
                    className="question"
                    data-target="what-kind-of-service-plan-does-yardly-offer-do-you-have-recurring-services"
                  >
                    What kind of service plan does Yardly offer? Do you have
                    recurring services?
                  </li>
                  <li
                    className="question"
                    data-target="when-and-how-will-i-be-charged"
                  >
                    When and how will I be charged?
                  </li>
                  <li
                    className="question"
                    data-target="how-long-will-it-take-a-provider-to-get-to-my-house"
                  >
                    How long will it take a provider to get to my house?
                  </li>
                  <li
                    className="question"
                    data-target="can-i-order-without-using-the-app"
                  >
                    Can I order without using the app?
                  </li>
                  <li
                    className="question"
                    data-target="who-else-sees-the-information-i-share-with-yardly-is-my-payment-information-secure"
                  >
                    Who else sees the information I share with Yardly? Is my
                    payment information secure?
                  </li>
                  <li
                    className="question"
                    data-target="how-will-i-know-when-work-is-completed-if-i-rsquo-m-not-home"
                  >
                    How will I know when work is completed if I’m not home?
                  </li>
                  <li
                    className="question"
                    data-target="what-happens-if-it-rains"
                  >
                    What happens if it rains?
                  </li>
                </ul>
              </li>
              <li className="category" data-target="yardly-s-service-providers">
                <span className="linktext">Yardly's Service Providers</span>
                <ul className="questions">
                  <li
                    className="question"
                    data-target="how-does-yardly-vet-its-independent-service-providers-what-kind-of-credentials-do-they-have"
                  >
                    How does Yardly vet its Independent Service Providers? What
                    kind of credentials do they have?
                  </li>
                  <li
                    className="question"
                    data-target="can-i-rate-my-service-partners"
                  >
                    Can I rate my service partners?
                  </li>
                  <li
                    className="question"
                    data-target="how-do-i-become-a-yardly-independent-service-provider"
                  >
                    How do I become a Yardly Independent Service Provider?
                  </li>
                </ul>
              </li>
              <li
                className="category"
                data-target="customer-service-complaints"
              >
                <span className="linktext">
                  Customer Service &amp; Complaints
                </span>
                <ul className="questions">
                  <li
                    className="question"
                    data-target="what-if-i-am-unhappy-with-the-service"
                  >
                    What if I am unhappy with the service?
                  </li>
                  <li
                    className="question"
                    data-target="i-think-my-property-has-been-damaged-by-a-yardly-service-provider-what-do-i-do"
                  >
                    I think my property has been damaged by a Yardly service
                    provider, what do I do?
                  </li>
                  <li
                    className="question"
                    data-target="i-m-having-trouble-with-the-app-who-should-i-contact"
                  >
                    I'm having trouble with the app, who should I contact?
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </section>
        <section className="help-contact">
          <h1 className="title">Need Something Else?</h1>
          <h2 className="subtitle">We’re ready to help:</h2>
          <div className="contact-methods">
            <span className="contact-method link">
              <a
                href="tel:18556888277"
                id="all-pages--main-footer--phone-number"
              >
                1‑855‑688‑8277
              </a>
            </span>
            <a
              className="contact-method link"
              href="mailto:hello@yardly.ca"
              id="help-page--body--email-address"
            >
              hello@yardly.ca
            </a>
          </div>
        </section>
        <section className="policies-statement">
          <h1 className="title">Policies &amp; Liabilities</h1>
          <p>
            Yardly values transparency and openness with our customers. Our
            Terms of Use are available <a href="/terms-of-use">here</a> and our
            privacy policy is available <a href="/privacy-policy">here</a> If
            you have any additional questions, please don’t hesitate to contact
            us and we’ll be happy to answer any questions you may have.
          </p>
        </section>
        <section className="service-areas">
          <div className="section service-areas-wrapper">
            <h2 className="section__header">
              Yardly is currently serving the following municipalities with
              plans to expand to all Canadian cities&nbsp;soon!
            </h2>
            <div className="locations-wrapper">
              <div className="locations-list">
                <p className="locations-list-title">Calgary Area</p>
                <Link to="#" className="location-item">
                  Calgary
                </Link>
                <Link to="#" className="location-item">
                  Airdrie
                </Link>
                <Link to="#" className="location-item">
                  Chestermere
                </Link>
                <Link to="#" className="location-item">
                  Cochrane
                </Link>
              </div>
              <div className="locations-list">
                <p className="locations-list-title">Edmonton Area</p>
                <Link to="#" className="location-item">
                  Edmonton
                </Link>
                <Link to="#" className="location-item">
                  Beaumont
                </Link>
                <Link to="#" className="location-item">
                  Fort Saskatchewan
                </Link>
                <Link to="#" className="location-item">
                  Leduc
                </Link>
                <Link to="#" className="location-item">
                  Sherwood Park
                </Link>
                <Link to="#" className="location-item">
                  Spruce Grove
                </Link>
                <Link to="#" className="location-item">
                  St. Albert
                </Link>
                <Link to="#" className="location-item">
                  Stony Plain
                </Link>
              </div>
              <div className="locations-list">
                <p className="locations-list-title">Winnipeg Area</p>
                <Link to="#" className="location-item">
                  Winnipeg
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
