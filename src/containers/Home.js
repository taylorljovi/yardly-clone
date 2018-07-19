import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'core-js/es6/map';
import 'core-js/es6/set';
import "../css/Home.css";

export default class Home extends Component {
  render() {
    return (
      <main className="Home">
        <section className="banner">
          <div className="banner__content">
            <div className="banner__text-box">
              <h1 className="banner__text banner__text--big">Yardly</h1>
              <h2 className="banner__text banner__text--medium">
                Lawn care & snow removal at your fingertips
              </h2>
              <h3 className="banner__text banner__text--small">
                Convenient, flexible, and reliable.
              </h3>
              <p className="see-how-it-works">
                <a href="#how-it-works">See how it works below</a>
              </p>
              <button className="banner__cta btn">See My Pricing</button>
            </div>
          </div>
        </section>
        <section className="section how-it-works -step1c" id="how-it-works">
          <h4 className="section__header">How It Works</h4>
          <div className="hiw__image">
            <svg
              version="1.1"
              className="diagram neighborhood-diagram"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1000 200"
            >
              <g className="city-skyline">
                <path
                  className="shape"
                  d="M823.5,181l-16.2-20.6l-10.5,12.5l-14.3-18.5L767.2,174l-8.8-9.9L743,183.9V99h-31v62h-4v8h-1 v11h-6V52h-11v-5h-13v5h-12v114h-3v18h-2v-11h-1v-14h-17v14h-3v-67.6l-9.8-17.8L613.1,105H609v78h-3v-17h-5v-3h-2v-7h-20v-6h-5V66 h-8v-3h-19v1h-8v95h-2v-5h-9v-4h-6v4h-3v4h-1v-58h-2V87h-2v-6h-0.7c0,0-4.1-4.9-12.4-4.9c-8.3,0-11.1,4.9-11.1,4.9H484v6h-1v15h-1 v57h-8v10h-4V87h-7v-4h-14v4h-6v82h-4v-15h-9v11h-2V76h-32v92h-3v-7h-9v9h-2v-14h-16.9l-6.2-4h-6.7c-1.4-5-7.2-7.7-15.2-8.6V140h-7 v3.4c-7,0.8-12.6,3.6-14,8.6h-6v-14h-4.6c-0.7-9-4.4-15.3-9.4-17.8v-5.6V107l-5-6.4l-5,6.4v7.6v5.6c-4,2.5-7.7,8.8-8.4,17.8H272v18 h-47v25h-25v19h633v-19H823.5z"
                />
              </g>
              <g className="sun">
                <circle className="shape" cx="874.5" cy="44.5" r="15.5" />
                <path
                  className="line"
                  d="M872.1,24.1c-9.4,1.1-16.8,8.5-18,17.9"
                />
                <path className="line" d="M877,64.9c9.4-1.1,16.8-8.5,18-17.9" />
                <path
                  className="line"
                  d="M894.9,42c-1.1-9.4-8.5-16.8-17.9-18"
                />
                <path className="line" d="M854,47c1.1,9.4,8.5,16.8,17.9,18" />
                <path className="line" d="M884,44.5c0-5.2-4.3-9.5-9.5-9.5" />
              </g>
              <g className="wind">
                <g className="gust">
                  <line className="line" x1="210" y1="80" x2="219" y2="80" />
                  <line className="line" x1="185" y1="64" x2="200" y2="64" />
                  <line className="line" x1="197" y1="58" x2="207" y2="58" />
                  <line className="line" x1="219" y1="58" x2="221" y2="58" />
                  <line className="line" x1="225" y1="58" x2="227" y2="58" />
                  <circle className="shape" cx="213" cy="57" r="3" />
                </g>
                <g className="gust">
                  <line
                    className="line"
                    x1="-21.5"
                    y1="87.5"
                    x2="-6.5"
                    y2="87.5"
                  />
                  <line
                    className="line"
                    x1="-9.5"
                    y1="82.5"
                    x2="1.5"
                    y2="82.5"
                  />
                  <circle className="shape" cx="12" cy="86" r="3" />
                </g>
                <g className="gust">
                  <line className="line" x1="117" y1="98" x2="133" y2="98" />
                  <line className="line" x1="141" y1="108" x2="126" y2="108" />
                  <line className="line" x1="138" y1="103" x2="148" y2="103" />
                  <line className="line" x1="152" y1="103" x2="155" y2="103" />
                  <line className="line" x1="167" y1="103" x2="171" y2="103" />
                  <line className="line" x1="175" y1="103" x2="178" y2="103" />
                </g>
                <g className="gust">
                  <line className="line" x1="349" y1="81" x2="364" y2="81" />
                  <line className="line" x1="357" y1="92" x2="372" y2="92" />
                  <line className="line" x1="370" y1="86" x2="379" y2="86" />
                  <line className="line" x1="385" y1="86" x2="387" y2="86" />
                  <line className="line" x1="401" y1="86" x2="403" y2="86" />
                </g>
                <g className="gust">
                  <line className="line" x1="437" y1="57" x2="439" y2="57" />
                  <line className="line" x1="443" y1="57" x2="445" y2="57" />
                  <line className="line" x1="474" y1="56" x2="488" y2="56" />
                  <line className="line" x1="485" y1="50" x2="495" y2="50" />
                  <line className="line" x1="486" y1="62" x2="488" y2="62" />
                  <line className="line" x1="492" y1="62" x2="494" y2="62" />
                  <circle className="shape" cx="462" cy="56" r="3" />
                </g>
                <g className="gust">
                  <line className="line" x1="486" y1="101" x2="489" y2="101" />
                  <line className="line" x1="493" y1="101" x2="503" y2="101" />
                  <line className="line" x1="508" y1="101" x2="510" y2="101" />
                  <line className="line" x1="481" y1="107" x2="496" y2="107" />
                </g>
                <g className="gust">
                  <line className="line" x1="574" y1="92" x2="589" y2="92" />
                  <circle className="shape" cx="602.5" cy="84.5" r="2.5" />
                  <line className="line" x1="586" y1="85" x2="596" y2="85" />
                  <line className="line" x1="609" y1="85" x2="611" y2="85" />
                  <line className="line" x1="615" y1="85" x2="617" y2="85" />
                </g>
                <g className="gust">
                  <line className="line" x1="695" y1="61" x2="705" y2="61" />
                  <line className="line" x1="702" y1="55" x2="717" y2="55" />
                  <line className="line" x1="696" y1="50" x2="698" y2="50" />
                  <line className="line" x1="702" y1="50" x2="704" y2="50" />
                </g>
                <g className="gust">
                  <line className="line" x1="702" y1="112" x2="716" y2="112" />
                  <line className="line" x1="713" y1="106" x2="723" y2="106" />
                  <line className="line" x1="750" y1="110" x2="760" y2="110" />
                  <line className="line" x1="757" y1="104" x2="772" y2="104" />
                  <line className="line" x1="750" y1="99" x2="752" y2="99" />
                  <line className="line" x1="756" y1="99" x2="758" y2="99" />
                  <circle className="shape" cx="738" cy="101" r="3" />
                </g>
                <g className="gust">
                  <line className="line" x1="973" y1="96" x2="988" y2="96" />
                  <circle className="shape" cx="1001" cy="90" r="3" />
                  <line className="line" x1="985" y1="90" x2="995" y2="90" />
                  <line className="line" x1="1007" y1="90" x2="1009" y2="90" />
                  <line className="line" x1="1013" y1="90" x2="1015" y2="90" />
                  <line
                    className="line"
                    x1="1009"
                    y1="115"
                    x2="1018"
                    y2="115"
                  />
                  <line className="line" x1="997" y1="120" x2="1011" y2="120" />
                  <line
                    className="line"
                    x1="1009"
                    y1="125"
                    x2="1012"
                    y2="125"
                  />
                  <line
                    className="line"
                    x1="1016"
                    y1="125"
                    x2="1018"
                    y2="125"
                  />
                </g>
              </g>
              <g className="clouds">
                <g className="cloud cloud-small">
                  <path
                    className="shape"
                    d="M374,30c0-3.4-2.5-6.3-5.7-6.9c0.2-0.5,0.3-1.1,0.3-1.7c0-3-2.4-5.5-5.4-5.5 c-1.2,0-2.3,0.4-3.2,1c-1.4-2.9-4.3-4.9-7.7-4.9c-4.7,0-8.6,3.8-8.6,8.6c0,0.7,0.1,1.4,0.2,2c-2.9,1-4.9,3.8-4.9,7 c0,4.1,3.3,7.4,7.4,7.4H367C370.9,37,374,33.9,374,30z"
                  />
                </g>
                <g className="cloud cloud-small">
                  <path
                    className="shape"
                    d="M690,63c0-3.4-2.5-6.3-5.7-6.9c0.2-0.5,0.3-1.1,0.3-1.7c0-3-2.4-5.5-5.4-5.5 c-1.2,0-2.3,0.4-3.2,1c-1.4-2.9-4.3-4.9-7.7-4.9c-4.7,0-8.6,3.8-8.6,8.6c0,0.7,0.1,1.4,0.2,2c-2.9,1-4.9,3.8-4.9,7 c0,4.1,3.3,7.4,7.4,7.4H683C686.9,70,690,66.9,690,63z"
                  />
                </g>
                <g className="cloud cloud-small">
                  <path
                    className="shape"
                    d="M-626,30c0-3.4-2.5-6.3-5.7-6.9c0.2-0.5,0.3-1.1,0.3-1.7c0-3-2.4-5.5-5.4-5.5 c-1.2,0-2.3,0.4-3.2,1c-1.4-2.9-4.3-4.9-7.7-4.9c-4.7,0-8.6,3.8-8.6,8.6c0,0.7,0.1,1.4,0.2,2c-2.9,1-4.9,3.8-4.9,7 c0,4.1,3.3,7.4,7.4,7.4h20.6C-629.1,37-626,33.9-626,30z"
                  />
                </g>
                <g className="cloud cloud-small">
                  <path
                    className="shape"
                    d="M-310,63c0-3.4-2.5-6.3-5.7-6.9c0.2-0.5,0.3-1.1,0.3-1.7c0-3-2.4-5.5-5.4-5.5 c-1.2,0-2.3,0.4-3.2,1c-1.4-2.9-4.3-4.9-7.7-4.9c-4.7,0-8.6,3.8-8.6,8.6c0,0.7,0.1,1.4,0.2,2c-2.9,1-4.9,3.8-4.9,7 c0,4.1,3.3,7.4,7.4,7.4h20.6C-313.1,70-310,66.9-310,63z"
                  />
                </g>
                <g className="cloud cloud-large">
                  <path
                    className="shape"
                    d="M114,71c5,0,9-4,9-9c0-4.4-3.2-8.1-7.3-8.8c0.2-0.7,0.3-1.4,0.3-2.2c0-3.9-3.1-7-7-7 c-1.5,0-2.9,0.5-4.1,1.3c-1.8-3.7-5.5-6.3-9.9-6.3c-6.1,0-11,4.9-11,11c0,0.9,0.1,1.7,0.3,2.6c-3.7,1.3-6.3,4.8-6.3,8.9 c0,5.2,4.3,9.5,9.5,9.5H114z"
                  />
                </g>
                <g className="cloud cloud-large">
                  <path
                    className="shape"
                    d="M315,100c5,0,9-4,9-9c0-4.4-3.2-8.1-7.3-8.8c0.2-0.7,0.3-1.4,0.3-2.2c0-3.9-3.1-7-7-7 c-1.5,0-2.9,0.5-4.1,1.3c-1.8-3.7-5.5-6.3-9.9-6.3c-6.1,0-11,4.9-11,11c0,0.9,0.1,1.7,0.3,2.6c-3.7,1.3-6.3,4.8-6.3,8.9 c0,5.2,4.3,9.5,9.5,9.5H315z"
                  />
                </g>
                <g className="cloud cloud-large">
                  <path
                    className="shape"
                    d="M950,91c5,0,9-4,9-9c0-4.4-3.2-8.1-7.3-8.8c0.2-0.7,0.3-1.4,0.3-2.2c0-3.9-3.1-7-7-7 c-1.5,0-2.9,0.5-4.1,1.3c-1.8-3.7-5.5-6.3-9.9-6.3c-6.1,0-11,4.9-11,11c0,0.9,0.1,1.7,0.3,2.6c-3.7,1.3-6.3,4.8-6.3,8.9 c0,5.2,4.3,9.5,9.5,9.5H950z"
                  />
                </g>
                <g className="cloud cloud-large">
                  <path
                    className="shape"
                    d="M-886,71c5,0,9-4,9-9c0-4.4-3.2-8.1-7.3-8.8c0.2-0.7,0.3-1.4,0.3-2.2c0-3.9-3.1-7-7-7 c-1.5,0-2.9,0.5-4.1,1.3c-1.8-3.7-5.5-6.3-9.9-6.3c-6.1,0-11,4.9-11,11c0,0.9,0.1,1.7,0.3,2.6c-3.7,1.3-6.3,4.8-6.3,8.9 c0,5.2,4.3,9.5,9.5,9.5H-886z"
                  />
                </g>
                <g className="cloud cloud-large">
                  <path
                    className="shape"
                    d="M-685,100c5,0,9-4,9-9c0-4.4-3.2-8.1-7.3-8.8c0.2-0.7,0.3-1.4,0.3-2.2c0-3.9-3.1-7-7-7 c-1.5,0-2.9,0.5-4.1,1.3c-1.8-3.7-5.5-6.3-9.9-6.3c-6.1,0-11,4.9-11,11c0,0.9,0.1,1.7,0.3,2.6c-3.7,1.3-6.3,4.8-6.3,8.9 c0,5.2,4.3,9.5,9.5,9.5H-685z"
                  />
                </g>
                <g className="cloud cloud-large">
                  <path
                    className="shape"
                    d="M-50,91c5,0,9-4,9-9c0-4.4-3.2-8.1-7.3-8.8c0.2-0.7,0.3-1.4,0.3-2.2c0-3.9-3.1-7-7-7 c-1.5,0-2.9,0.5-4.1,1.3c-1.8-3.7-5.5-6.3-9.9-6.3c-6.1,0-11,4.9-11,11c0,0.9,0.1,1.7,0.3,2.6c-3.7,1.3-6.3,4.8-6.3,8.9 c0,5.2,4.3,9.5,9.5,9.5H-50z"
                  />
                </g>
              </g>
              <g className="order-method-phone">
                <circle className="shape" cx="205" cy="236" r="24" />
                <g className="handset">
                  <path
                    className="shape"
                    d="M195.8,222.4c-1-1-2,0-2,0l-5,5c-2,2,0,5,3,8l13,13c5,4,7,6,9,4l5-5c0,0,1-1,0-2s-6-3-6-3 l-4,1l-10-10l1-5C199.8,228.4,196.8,223.4,195.8,222.4z"
                  />
                  <path
                    className="shape hightlight"
                    d="M189.2,227c-3.2,3-0.2,6,2.8,9l13,13c5,4,7,6,9.2,3L189.2,227z"
                  />
                </g>
              </g>
              <g className="order-method-web">
                <circle className="shape" cx="205" cy="236" r="24" />
                <g className="computer">
                  <polygon
                    className="shape stand"
                    points="208,250 210,251 210,253 200,253 200,251 202,250 202,247 208,247"
                  />
                  <rect
                    className="shape back"
                    x="189"
                    y="225"
                    width="33"
                    height="22"
                  />
                  <rect
                    className="shape strip"
                    x="189"
                    y="245"
                    width="33"
                    height="2"
                  />
                  <rect
                    className="shape screen"
                    x="189"
                    y="225"
                    width="33"
                    height="18"
                  />
                  <g className="map">
                    <rect
                      className="shape"
                      x="190"
                      y="226"
                      width="31"
                      height="16"
                    />
                  </g>
                  <g className="location-marker">
                    <path
                      className="shape"
                      d="M208.2,232c0-1.7-1.3-3-3-3s-3,1.3-3,3c0,2,3,6,3,6S208.2,234,208.2,232z M205.2,231 c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S204.7,231,205.2,231z"
                    />
                  </g>
                </g>
              </g>
              <g className="order-method-app">
                <circle className="shape" cx="205" cy="236" r="24" />
                <g className="phone">
                  <path
                    className="shape back"
                    d="M197,255c-1,0-2-1-2-2s0-33,0-34s1-2,2-2s16,0,17,0s2,1,2,2s0,32.8,0,34s-1,2-2,2 S198,255,197,255z"
                  />
                  <rect
                    className="shape screen"
                    x="196"
                    y="221"
                    width="19"
                    height="28"
                  />
                  <circle className="shape button" cx="206" cy="252" r="2" />
                  <line
                    className="line speaker"
                    x1="201"
                    y1="219"
                    x2="206"
                    y2="219"
                  />
                  <line
                    className="line camera"
                    x1="209"
                    y1="219"
                    x2="209"
                    y2="219"
                  />
                  <g className="map">
                    <rect
                      className="shape"
                      x="197"
                      y="222"
                      width="17"
                      height="26"
                    />
                  </g>
                  <g className="location-marker">
                    <path
                      className="shape"
                      d="M209,231c0-1.7-1.3-3-3-3s-3,1.3-3,3c0,2,3,6,3,6S209,233,209,231z M206,230 c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S205.4,230,206,230z"
                    />
                  </g>
                  <rect
                    className="shape order-button"
                    x="199"
                    y="242"
                    width="13"
                    height="4"
                  />
                </g>
              </g>
              <g className="checkmark">
                <circle className="shape" cx="202.5" cy="234" r="21.5" />
                <polyline
                  className="line"
                  points="190.7,234 199.7,243 215.7,227"
                />
              </g>
              <g className="yardly-office">
                <g className="pictures">
                  <g className="photo">
                    <rect
                      className="shape"
                      x="769"
                      y="111"
                      width="43"
                      height="29"
                    />
                  </g>
                  <g className="photo">
                    <rect
                      className="shape"
                      x="765"
                      y="107"
                      width="43"
                      height="29"
                    />
                  </g>
                  <g className="ground">
                    <rect
                      className="shape"
                      x="766"
                      y="132"
                      width="41"
                      height="3"
                    />
                  </g>
                  <g className="tree-small">
                    <circle className="shape" cx="803" cy="120.2" r="5" />
                    <line
                      className="line"
                      x1="803"
                      y1="119.8"
                      x2="803"
                      y2="132"
                    />
                    <line
                      className="line"
                      x1="803"
                      y1="122.2"
                      x2="800"
                      y2="120.2"
                    />
                    <line
                      className="line"
                      x1="801.5"
                      y1="118.8"
                      x2="801"
                      y2="120.8"
                    />
                    <line
                      className="line"
                      x1="803"
                      y1="121.2"
                      x2="806"
                      y2="118.8"
                    />
                  </g>
                  <g className="grass short-grass">
                    <line
                      className="line"
                      x1="765.5"
                      y1="132"
                      x2="765.5"
                      y2="130"
                    />
                    <line
                      className="line"
                      x1="768.5"
                      y1="132"
                      x2="768.5"
                      y2="130"
                    />
                    <line
                      className="line"
                      x1="771.5"
                      y1="132"
                      x2="771.5"
                      y2="130"
                    />
                    <line
                      className="line"
                      x1="774.5"
                      y1="132"
                      x2="774.5"
                      y2="130"
                    />
                    <line
                      className="line"
                      x1="777.5"
                      y1="132"
                      x2="777.5"
                      y2="130"
                    />
                    <line
                      className="line"
                      x1="780.5"
                      y1="132"
                      x2="780.5"
                      y2="130"
                    />
                    <line
                      className="line"
                      x1="783.5"
                      y1="132"
                      x2="783.5"
                      y2="130"
                    />
                    <line
                      className="line"
                      x1="786.5"
                      y1="132"
                      x2="786.5"
                      y2="130"
                    />
                    <line
                      className="line"
                      x1="789.5"
                      y1="132"
                      x2="789.5"
                      y2="130"
                    />
                    <line
                      className="line"
                      x1="792.5"
                      y1="132"
                      x2="792.5"
                      y2="130"
                    />
                    <line
                      className="line"
                      x1="795.5"
                      y1="132"
                      x2="795.5"
                      y2="130"
                    />
                    <line
                      className="line"
                      x1="798.5"
                      y1="132"
                      x2="798.5"
                      y2="130"
                    />
                  </g>
                </g>
                <g className="antenna">
                  <polyline
                    className="line"
                    points="808,101 808,82 800.5,74.5"
                  />
                  <circle className="shape" cx="800.5" cy="74.5" r="2.5" />
                  <g className="radio-waves -right">
                    <path
                      className="line"
                      d="M804.4,70.6c1,1,1.6,2.4,1.6,3.9"
                    />
                    <path
                      className="line"
                      d="M807.2,67.8c1.7,1.7,2.8,4.1,2.8,6.7"
                    />
                  </g>
                  <g className="radio-waves -left">
                    <path
                      className="line"
                      d="M796.6,78.4c-1-1-1.6-2.4-1.6-3.9s0.6-2.9,1.6-3.9"
                    />
                    <path
                      className="line"
                      d="M793.8,81.2c-1.7-1.7-2.8-4.1-2.8-6.7s1.1-5,2.8-6.7"
                    />
                  </g>
                </g>
                <path
                  className="shape"
                  d="M762,99v82h52V99h-17c0-5-4-9-9-9s-9,4-9,9H762z"
                />
                <g className="window">
                  <rect
                    x="790"
                    y="154"
                    className="shape"
                    width="6"
                    height="18"
                  />
                  <line className="line" x1="790" y1="160" x2="796" y2="160" />
                </g>
                <g className="window">
                  <rect
                    x="780"
                    y="154"
                    className="shape"
                    width="6"
                    height="18"
                  />
                  <line className="line" x1="780" y1="160" x2="786" y2="160" />
                </g>
                <g className="window">
                  <rect
                    x="770"
                    y="154"
                    className="shape"
                    width="6"
                    height="18"
                  />
                  <line className="line" x1="770" y1="160" x2="776" y2="160" />
                </g>
                <g className="window">
                  <rect
                    x="800"
                    y="154"
                    className="shape"
                    width="6"
                    height="18"
                  />
                  <line className="line" x1="800" y1="160" x2="806" y2="160" />
                </g>
                <line className="line" x1="762" y1="104" x2="814" y2="104" />
                <line className="line" x1="762" y1="109" x2="814" y2="109" />
                <line className="line" x1="762" y1="149" x2="814" y2="149" />
                <line className="line" x1="762" y1="176" x2="814" y2="176" />
                <line className="line" x1="763" y1="149" x2="769" y2="141" />
                <line className="line" x1="772" y1="149" x2="778" y2="141" />
                <line className="line" x1="781" y1="149" x2="787" y2="141" />
                <line className="line" x1="790" y1="149" x2="796" y2="141" />
                <line className="line" x1="799" y1="149" x2="805" y2="141" />
                <line className="line" x1="808" y1="149" x2="814" y2="141" />
                <line className="line" x1="762" y1="141" x2="814" y2="141" />
                <line className="line" x1="762" y1="128" x2="767" y2="128" />
                <line className="line" x1="762" y1="131" x2="765" y2="131" />
                <line className="line" x1="762" y1="137" x2="766" y2="137" />
                <g className="yardly-logo">
                  <polygon
                    className="shape"
                    points="797,114 796,114 789,121 788,121 781,114 780,114 779,115 779,116 786,123 787,125 787,135 788,136 789,136 790,135 790,125 791,123 798,116 798,115"
                  />
                </g>
                <g className="tree tree-small">
                  <circle className="shape" cx="842" cy="157.5" r="10" />
                  <line
                    className="line"
                    x1="842"
                    y1="156.5"
                    x2="842"
                    y2="181"
                  />
                  <line
                    className="line"
                    x1="842"
                    y1="161.5"
                    x2="836"
                    y2="157.5"
                  />
                  <line
                    className="line"
                    x1="839"
                    y1="154.5"
                    x2="838"
                    y2="158.5"
                  />
                  <line
                    className="line"
                    x1="842"
                    y1="159.5"
                    x2="848"
                    y2="154.5"
                  />
                </g>
              </g>
              <g className="customer-property">
                <g className="customer-house">
                  <g className="wall">
                    <rect
                      className="shape"
                      x="186"
                      y="161"
                      width="43"
                      height="20"
                    />
                  </g>
                  <g className="roof">
                    <polygon
                      className="shape"
                      points="189,152 226,152 232,161 183,161"
                    />
                    <line
                      className="line"
                      x1="190"
                      y1="161.5"
                      x2="190"
                      y2="165"
                    />
                    <line
                      className="line"
                      x1="194"
                      y1="152"
                      x2="191"
                      y2="157"
                    />
                    <line
                      className="line"
                      x1="200"
                      y1="152"
                      x2="197"
                      y2="157"
                    />
                    <line
                      className="line"
                      x1="206"
                      y1="152"
                      x2="203"
                      y2="157"
                    />
                    <line
                      className="line"
                      x1="212"
                      y1="152"
                      x2="209"
                      y2="157"
                    />
                    <line
                      className="line"
                      x1="218"
                      y1="152"
                      x2="215"
                      y2="157"
                    />
                    <line
                      className="line"
                      x1="224"
                      y1="152"
                      x2="221"
                      y2="157"
                    />
                    <line
                      className="line"
                      x1="210"
                      y1="161.5"
                      x2="210"
                      y2="165"
                    />
                    <line
                      className="line"
                      x1="195"
                      y1="161.5"
                      x2="195"
                      y2="165"
                    />
                    <line
                      className="line"
                      x1="215"
                      y1="161.5"
                      x2="215"
                      y2="165"
                    />
                    <line
                      className="line"
                      x1="200"
                      y1="161.5"
                      x2="200"
                      y2="165"
                    />
                    <line
                      className="line"
                      x1="220"
                      y1="161.5"
                      x2="220"
                      y2="165"
                    />
                    <line
                      className="line"
                      x1="205"
                      y1="161.5"
                      x2="205"
                      y2="165"
                    />
                    <line
                      className="line"
                      x1="225"
                      y1="161.5"
                      x2="225"
                      y2="165"
                    />
                  </g>
                  <g className="window">
                    <rect
                      className="shape"
                      x="217"
                      y="168"
                      width="7"
                      height="9"
                    />
                    <line
                      className="line"
                      x1="217"
                      y1="172"
                      x2="224"
                      y2="172"
                    />
                  </g>
                  <g className="window">
                    <rect
                      className="shape"
                      x="191"
                      y="168"
                      width="7"
                      height="9"
                    />
                    <line
                      className="line"
                      x1="191"
                      y1="172"
                      x2="198"
                      y2="172"
                    />
                  </g>
                  <g className="door">
                    <rect
                      className="shape"
                      x="204"
                      y="170"
                      width="7"
                      height="11"
                    />
                  </g>
                </g>
                <g className="bush">
                  <path
                    className="shape"
                    d="M170.2,181c-1.7,0-3-1.3-3-3c0-1.5,1.1-2.7,2.4-2.9c-0.1-0.2-0.1-0.5-0.1-0.7c0-1.3,1-2.3,2.3-2.3 c0.5,0,1,0.2,1.4,0.4c0.6-1.2,1.8-2.1,3.3-2.1c2,0,3.7,1.6,3.7,3.7c0,0.3,0,0.6-0.1,0.9c1.2,0.4,2.1,1.6,2.1,3 c0,1.7-1.4,3.2-3.2,3.2H170.2z"
                  />
                </g>
                <g className="grass tall-grass">
                  <line className="line" x1="236" y1="181" x2="236" y2="174" />
                  <line className="line" x1="276" y1="181" x2="276" y2="177" />
                  <line className="line" x1="264" y1="181" x2="264" y2="177" />
                  <line className="line" x1="252" y1="181" x2="252" y2="177" />
                  <line className="line" x1="292" y1="181" x2="292" y2="177" />
                  <line className="line" x1="244" y1="181" x2="244" y2="172" />
                  <line className="line" x1="284" y1="181" x2="284" y2="172" />
                  <line className="line" x1="272" y1="181" x2="272" y2="172" />
                  <line className="line" x1="256" y1="181" x2="256" y2="171" />
                  <line className="line" x1="296" y1="181" x2="296" y2="173" />
                  <line className="line" x1="240" y1="176" x2="240" y2="170" />
                  <line className="line" x1="280" y1="176" x2="280" y2="170" />
                  <line className="line" x1="260" y1="175" x2="260" y2="172" />
                  <line className="line" x1="248" y1="181" x2="248" y2="171" />
                  <line className="line" x1="288" y1="181" x2="288" y2="171" />
                  <line className="line" x1="268" y1="181" x2="268" y2="170" />
                  <line className="line" x1="276" y1="174" x2="276" y2="171" />
                  <line className="line" x1="264" y1="174" x2="264" y2="171" />
                  <line className="line" x1="252" y1="174" x2="252" y2="170" />
                  <line className="line" x1="292" y1="174" x2="292" y2="170" />
                  <line className="line" x1="240" y1="181" x2="240" y2="179" />
                  <line className="line" x1="280" y1="181" x2="280" y2="179" />
                  <line className="line" x1="260" y1="181" x2="260" y2="178" />
                  <line className="line" x1="300" y1="181" x2="300" y2="178" />
                </g>
                <g className="grass short-grass">
                  <line className="line" x1="236" y1="181" x2="236" y2="178" />
                  <line className="line" x1="276" y1="181" x2="276" y2="178" />
                  <line className="line" x1="264" y1="181" x2="264" y2="178" />
                  <line className="line" x1="252" y1="181" x2="252" y2="178" />
                  <line className="line" x1="292" y1="181" x2="292" y2="178" />
                  <line className="line" x1="244" y1="181" x2="244" y2="178" />
                  <line className="line" x1="284" y1="181" x2="284" y2="178" />
                  <line className="line" x1="272" y1="181" x2="272" y2="178" />
                  <line className="line" x1="256" y1="181" x2="256" y2="178" />
                  <line className="line" x1="296" y1="181" x2="296" y2="178" />
                  <line className="line" x1="248" y1="181" x2="248" y2="178" />
                  <line className="line" x1="288" y1="181" x2="288" y2="178" />
                  <line className="line" x1="268" y1="181" x2="268" y2="178" />
                  <line className="line" x1="240" y1="181" x2="240" y2="178" />
                  <line className="line" x1="280" y1="181" x2="280" y2="178" />
                  <line className="line" x1="260" y1="181" x2="260" y2="178" />
                  <line className="line" x1="300" y1="181" x2="300" y2="178" />
                </g>
                <g className="tree tree-large">
                  <ellipse
                    className="shape"
                    cx="160"
                    cy="153"
                    rx="11.5"
                    ry="11.5"
                  />
                  <line
                    className="line"
                    x1="160"
                    y1="151.9"
                    x2="160"
                    y2="180"
                  />
                  <line
                    className="line"
                    x1="160"
                    y1="157.6"
                    x2="153.1"
                    y2="153"
                  />
                  <line
                    className="line"
                    x1="156.6"
                    y1="149.6"
                    x2="155.4"
                    y2="154.2"
                  />
                  <line
                    className="line"
                    x1="160"
                    y1="155.3"
                    x2="166.9"
                    y2="149.6"
                  />
                </g>
                <g className="tree tree-small">
                  <circle className="shape" cx="144" cy="157.5" r="10" />
                  <line
                    className="line"
                    x1="144"
                    y1="156.5"
                    x2="144"
                    y2="181"
                  />
                  <line
                    className="line"
                    x1="144"
                    y1="161.5"
                    x2="138"
                    y2="157.5"
                  />
                  <line
                    className="line"
                    x1="141"
                    y1="154.5"
                    x2="140"
                    y2="158.5"
                  />
                  <line
                    className="line"
                    x1="144"
                    y1="159.5"
                    x2="150"
                    y2="154.5"
                  />
                </g>
                <g className="tree tree-small">
                  <circle className="shape" cx="313" cy="157.5" r="10" />
                  <line
                    className="line"
                    x1="313"
                    y1="156.5"
                    x2="313"
                    y2="181"
                  />
                  <line
                    className="line"
                    x1="313"
                    y1="161.5"
                    x2="307"
                    y2="157.5"
                  />
                  <line
                    className="line"
                    x1="310"
                    y1="154.5"
                    x2="309"
                    y2="158.5"
                  />
                  <line
                    className="line"
                    x1="313"
                    y1="159.5"
                    x2="319"
                    y2="154.5"
                  />
                </g>
              </g>
              <g className="lawn-mower">
                <path
                  className="shape body"
                  d="M57,170c0-4,1.8-4,4-4s4,0,4,4H57z"
                />
                <path
                  className="shape cap"
                  d="M76,178H46v-6c0-1,1-2,2-2h26c1,0,2,1,2,2V178z"
                />
                <circle className="shape wheel" cx="52.5" cy="176.5" r="3.5" />
                <circle className="shape wheel" cx="69.5" cy="176.5" r="3.5" />
                <polyline
                  className="line handle"
                  points="47,169 42,160 39,160"
                />
              </g>
              <g className="ground">
                <rect
                  className="shape mask"
                  x="0"
                  y="180"
                  width="1000"
                  height="16"
                />
                <rect
                  className="shape"
                  x="5"
                  y="185"
                  width="1033"
                  height="15"
                />
                <line className="line" x1="1040" y1="181" x2="0" y2="181" />
                <line className="line" x1="1040" y1="195" x2="0" y2="195" />
              </g>
            </svg>
            <div className="instructions">
              <div className="instruction -step1">
                <h3 className="section-subtitle">Make Your&nbsp;Booking</h3>
                <p>
                  Order online, through our app, or by phone. We'll measure your
                  property online and get you set up in no&nbsp;time.
                </p>
              </div>
              <div className="instruction -step2">
                <h3 className="section-subtitle">Sit Back and&nbsp;Relax</h3>
                <p>
                  You can relax while your lawn or snow is taken care of by a
                  vetted and insured Yardly Independent Service&nbsp;Provider.
                </p>
              </div>
              <div className="instruction -step3">
                <h3 className="section-subtitle">Rate How They&nbsp;Did</h3>
                <p>
                  You'll get to rate the Yardly Independent Service Provider’s
                  quality of work after each visit. We won’t rest until the job
                  is done&nbsp;right.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section benefit-statements">
          <h2 className="section__header">
            Professional Lawn Mowing &amp; Snow Removal, Whenever You Need It
          </h2>
          <p>
            Yardly is a service platform that connects homeowners and property
            managers with vetted and insured local contractors. Yardly uses
            technology to simplify your experience to order snow removal and
            lawn care services throughout the year.
          </p>
          <div className="statements">
            <div className="statement">
              <h3 className="subtitle">Convenient</h3>
              <ul>
                <li>Simple ordering process on website and mobile app</li>
                <li>View photos of your property for each job</li>
              </ul>
            </div>
            <div className="statement">
              <h3 className="subtitle">Reliable</h3>
              <ul>
                <li>Vetted and insured local companies and contractors</li>
                <li>Complete satisfaction guarantee</li>
              </ul>
            </div>
            <div className="statement">
              <h3 className="subtitle">Flexible</h3>
              <ul>
                <li>Flexible, recurring plans that never lock you in</li>
                <li>Competitive rates based on fair market pricing</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section contact-us">
          <div className="contact-wrapper">
            <div className="contact-content">
              <h2 className="title">
                Order snow removal and lawn care, whenever you want, from
                wherever you happen to be!
              </h2>
              <div className="contact-methods">
                <Link
                  className="contact-method app-badge"
                  to=""
                  target="_blank"
                >
                  <img src="./images/App_Store_Badge.png" alt="app-badge" />
                </Link>
                <Link
                  className="contact-method app-badge"
                  to="#"
                  target="_blank"
                >
                  <img
                    src="./images/en_badge_web_generic.png"
                    alt="app-badge"
                  />
                </Link>
              </div>
            </div>
            <div className="contact-image" />
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
