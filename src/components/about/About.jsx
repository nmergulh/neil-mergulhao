import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="background-image"></div>
      <div className="timeline-right">
        <ul class="timeline">
          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag wbg">April 2022</span>
                <span class="time-wrapper hide">
                  <span class="time">2011 - 2013</span>
                </span>
              </div>
              <div class="desc">
                WooCommerce integration, release of Point of Sale system
              </div>
            </div>
          </li>
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="flag wbg">March 2022</span>
                <span class="time-wrapper hide">
                  <span class="time">2013 - present</span>
                </span>
              </div>
              <div class="desc">
                WooCommerce integration, release of Point of Sale system
              </div>
            </div>
          </li>
          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag xl">May 2022 </span>
                <span class="time-wrapper hide">
                  <span class="time">2011 - 2013</span>
                </span>
              </div>
              <div class="desc">
                WooCommerce integration, release of Point of Sale system
              </div>
            </div>
          </li>
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="flag wbg">June 2022</span>
                <span class="time-wrapper hide">
                  <span class="time">2008 - 2011</span>
                </span>
              </div>
              <div class="desc">
                Shopify integration, Cometa Token private sale for early
                investors and ICO
              </div>
            </div>
          </li>
          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag wbg">July</span>
                <span class="time-wrapper hide">
                  <span class="time">2011 - 2013</span>
                </span>
              </div>
              <div class="desc">
                Shopify integration, Cometa Token private sale for early
                investors and ICO
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
