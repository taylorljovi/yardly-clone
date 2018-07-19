import React, { Component } from "react";
import {Link} from 'react-router-dom';
import 'core-js/es6/map';
import 'core-js/es6/set';
import "../css/Pricing.css";

export default class Pricing extends Component {
  render() {
    return (
      <main className="Pricing">
        <div className="section-header">
          <h1 className="title">Lawn Mowing Services &amp; Pricing</h1>
        </div>
        <section className="section-pricing">
          <h2 className="section-title">
            Keep your lawn green and tidy in just a few clicks!
          </h2>
          <p>
            Summers are time for festivals and roadtrips, with K-Days coming and
            the mountains calling, why waste time doing chores? Whether your
            mower broke down and you need grass cutting until you can replace
            it, or you'd like recurring lawn maintenance for the summer, Yardly
            has you covered. Simply order from our website, mobile app, or
            phone, and you can have your lawn cut within 24 hours.
          </p>
          <p>
            Lawn mowing services are available on the Yardly platform from May 1
            to September 30 every year. Yardly services most surrounding
            municipalities of the Capital Region including the City of Edmonton,
            St. Albert, Sherwood Park, Spruce Grove, Stony Plain, Fort
            Saskatchewan, Leduc, and Beaumont, as well as selected areas in
            Strathcona County, Parkland County, Leduc County and Sturgeon
            County.
          </p>
          <h3 className="section-subtitle -topspace">What are your options?</h3>
          <p>
            Yardly currently offers multiple lawn mowing service plans for both
            short-term and long-term needs. We now offer full season bundling
            discounts for our long-term customers looking to include spring
            clean ups, fall clean ups, or fertilization with their regular lawn
            mowing service.
          </p>
          <p>Yardly currently offers multiple lawn mowing service plans:</p>
          <p />
          <h3>
            <i>Full Season Services</i>
          </h3>
          <p />
          <ul>
            <li>
              <strong>Weekly Mowing Plan</strong> - Get your lawn cut once a
              week. This is the best way to keep your lawn neat and healthy.
              Mulched clippings are the default for weekly plans, so all the
              nutrients are kept with your lawn. If you choose to have your
              grass clippings bagged, a bagging fee will apply.
            </li>
            <li>
              <strong>Bi-weekly Mowing Plan</strong> - Get your lawn cut every
              second week. This is a great, hassle-free lawn care plan to get
              the chore off your list. Clippings are bagged by default and left
              for municipality collection.
            </li>
          </ul>
          <p>
            Bundle a Spring Clean Up or Fall Clean Up to your Full Season lawn
            service for discounts.
          </p>
          <p />
          <h3>
            <i>Short Term Services</i>
          </h3>
          <p />
          <ul>
            <li>
              <strong>Flexcut Mowing Plan</strong> - Choose your own frequency,
              and get lawn cutting service at a schedule that works for you.
              Book at least 24 hours in advance. You can change the frequency
              throughout the season.
            </li>
            <li>
              <strong>Express Service</strong> - Yardly offers a one-time
              service where customers can order through our website, mobile app,
              or through the phone as needed. Grass cutting will be completed by
              an Independent Service Provider within 24 hours!
            </li>
          </ul>
          <p />
          <h3 className="section-subtitle -topspace">
            What's included in your service?
          </h3>
          <p>Each lawn mowing service includes:</p>
          <ul>
            <li>
              <strong>Mowing</strong> - Professional grass cutting on all turf
              surfaces to standard cutting height of 2.5 to 3 inches
            </li>
            <li>
              <strong>Trimming</strong> - Grass trimming along all of the edges
              of the turf surfaces
            </li>
            <li>
              <strong>Blowing</strong> - Loose clippings will be blown off
              driveways and walkways
            </li>
            <li>
              <strong>Mulched or Bagged Clippings</strong> - Clippings are
              mulched by default for our Weekly Mowing Plan; additional charges
              apply for bagging. Clippings are bagged by default and included in
              the pricing of Bi-weekly Mowing, Flexcut Mowing, and Express
              Service plans. Bagged clippings will be left near your property's
              waste pickup site for removal by your municipality.
            </li>
          </ul>
          <p />
          <p>
            Typical mowing area include turf areas in the front yard, back yard,
            front and side boulevard, and rear alley if applicable. Please
            specify the lawn mowing area that suits your needs!
          </p>
          <h3 className="section-subtitle -topspace">
            What add-ons does Yardly offer?
          </h3>
          <p />
          <ul>
            <li>
              <strong>Power Edging</strong> - Power edging is the mechanical
              removal of overgrown grass on concrete areas by a metal blade. It
              uniforms grass lines and gives your lawn a professional and clean
              look around sidewalks and driveways. Get a power edging add-on
              starting at $25!
            </li>
            <li>
              <strong>Fertilization</strong> - Fertilization can help build
              stronger grass roots and blades, and strengthens the lawn against
              weed growth. Add monthly fertilization to have a healthy green
              lawn all summer!
            </li>
          </ul>
          <p />
          <h3 className="section-subtitle -topspace">
            What's not included in your service?
          </h3>
          <p>
            The below services are not included in a typical lawn mowing service
            visit, and may cause surcharges or service delays.
          </p>
          <ul>
            <li>
              Grass under inaccessible areas such as trampoline, garden
              furnitures, etc. No objects will be moved for liability reasons.
            </li>
            <li>Cleaning up of pet waste or excessive debris in turf area.</li>
          </ul>
          <p />
          <h3 className="section-subtitle -topspace">
            How does Yardly determine pricing?
          </h3>
          <p>
            Yardly determines the price for each of our services based on
            extensive market research of local market pricing. Lawn mowing price
            is based on the size of the area that needs to be mowed. If you
            don't know your lawn size, don't worry! Just make your best guess
            when you order, and we will verify it and let you know if the size
            is off. <a href="mailto:hello@yardly.ca">Contact us</a>
            now if you would like to know the accurate pricing.
          </p>
          <article className="pricing-package lawnmowing">
            <header className="description">
              <span className="title">Weekly Mowing Plan</span>
              <span className="title font-normal">
                (priced per visit and billed monthly*) Include bagging of
                clippings for additional charge
              </span>
            </header>
            <ol className="prices">
              <li className="price lawnmowing" data-size="data-price=31">
                <span className="description">
                  1500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 31
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=35">
                <span className="description">
                  2500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 35
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=39">
                <span className="description">
                  3500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 39
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=43">
                <span className="description">
                  4500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 43
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=47">
                <span className="description">
                  5500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 47
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=51">
                <span className="description">
                  6500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 51
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=55">
                <span className="description">
                  7500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 55
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=59">
                <span className="description">
                  8500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 59
                </span>
              </li>
            </ol>
          </article>
          <article className="pricing-package lawnmowing">
            <header className="description">
              <span className="title">Bi-weekly Mowing Plan</span>
              <span className="title font-normal">
                (priced per visit and billed monthly*)
              </span>
            </header>
            <ol className="prices">
              <li className="price lawnmowing" data-size="data-price=49">
                <span className="description">
                  1500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 49
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=54">
                <span className="description">
                  2500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 54
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=59">
                <span className="description">
                  3500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 59
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=64">
                <span className="description">
                  4500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 64
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=69">
                <span className="description">
                  5500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 69
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=74">
                <span className="description">
                  6500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 74
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=79">
                <span className="description">
                  7500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 79
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=84">
                <span className="description">
                  8500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 84
                </span>
              </li>
            </ol>
          </article>
          <article className="pricing-package lawnmowing">
            <header className="description">
              <span className="title">Flexcut Mowing Plan</span>
              <span className="title font-normal">
                (Priced and billed per visit)
              </span>
            </header>
            <ol className="prices">
              <li className="price lawnmowing" data-size="data-price=53">
                <span className="description">
                  1500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 53
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=59">
                <span className="description">
                  2500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 59
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=65">
                <span className="description">
                  3500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 65
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=71">
                <span className="description">
                  4500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 71
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=77">
                <span className="description">
                  5500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 77
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=83">
                <span className="description">
                  6500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 83
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=89">
                <span className="description">
                  7500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 89
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=95">
                <span className="description">
                  8500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 95
                </span>
              </li>
            </ol>
          </article>
          <article className="pricing-package lawnmowing">
            <header className="description">
              <span className="title">Express Service</span>
              <span className="title font-normal">
                (Priced and billed per visit)
              </span>
            </header>
            <ol className="prices">
              <li className="price lawnmowing" data-size="data-price=73">
                <span className="description">
                  1500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 73
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=79">
                <span className="description">
                  2500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 79
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=85">
                <span className="description">
                  3500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 85
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=91">
                <span className="description">
                  4500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 91
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=97">
                <span className="description">
                  5500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 97
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=103">
                <span className="description">
                  6500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 103
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=109">
                <span className="description">
                  7500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 109
                </span>
              </li>
              <li className="price lawnmowing" data-size="data-price=115">
                <span className="description">
                  8500 <span className="unit">sqft</span>
                </span>
                <span className="amount">
                  <sup className="unit">$</sup> 115
                </span>
              </li>
            </ol>
          </article>
          <p>
            * Weekly and Bi-weekly Mowing Plans are charged at the beginning of
            each month for the total number of visits scheduled in the
            respective month. Save 10% on a Weekly or Bi-weekly Mowing Plan by
            prepaying before 1 May 2018 for the full-season.
          </p>
          <p>
            For the list of potential surcharge and our cancellation policy,
            please visit
            <a href="/possible-surcharges-and-cancellation-policy">here</a>. For
            full service details, please visit the
            <a href="/service-guidelines">service guidelines</a>.
          </p>
          <h3 className="section-subtitle -topspace">Why choose Yardly?</h3>
          <p>
            <strong>Unmatched peace of mind</strong> - Yardly carefully vets and
            screens all Independent Service Providers working on the platform,
            to ensure they are capable of performing your services to the
            highest standard. All Independent Service Providers working on the
            platform are local companies and contractors that are insured with
            Commercial Liability insurance and have been cleared with a Criminal
            Record check. They are also rated by customers after each service,
            and only Providers rated higher than 4.0 are working on the
            platform, ensuring you can receive the best lawn mowing service
            possible.
          </p>
          <p>
            <strong>Customer Experience</strong> - Yardly strives to provide an
            unmatched customer experience. We offer multiple service plans to
            meet your specific needs, have seamless order processing through web
            or phone, and ensure your property is left in a safe condition upon
            completing your service. If you have any questions or concerns with
            your service we are reachable through our website chat, phone, or
            email!
          </p>
          <p>
            <strong>Pictures sent right to your phone</strong> - On vacation and
            away from the home? Managing several rental properties? Photos
            before and after each lawn care service are taken by Yardly
            Independent Service Providers, and stored on the Yardly server. Upon
            request, Yardly can send photos of all completed lawn care services
            right to your email so that you can make sure that your lawn was cut
            exactly the way you wanted it, from wherever you happen to be.
          </p>

          <div className="section-cta">
            <button className="cta">Order Lawn Mowing</button>
          </div>
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

