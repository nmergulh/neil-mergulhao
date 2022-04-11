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
                <span class="flag wbg">July 2016</span>
                <span class="time-wrapper hide">
                  <span class="time">2012 - 2016</span>
                </span>
              </div>
              <div class="desc">
                Graduated from De Montfort University with 1st Class Honours in
                Business & Management with Erasmus+ year abroad at KU Lueven,
                Brussels
              </div>
            </div>
          </li>
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="flag wbg">September 2016</span>
                <span class="time-wrapper hide">
                  <span class="time">2016 - 2021</span>
                </span>
              </div>
              <div class="desc">
                Joined FDM Group as a PMO Consultant. Undertook assignments for
                Virgin Media, HMCTS & HSBC Private Banking as a PMO/Business
                Analyst.
              </div>
            </div>
          </li>
          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag xl">October 2021 </span>
                <span class="time-wrapper hide">
                  <span class="time">2021 - 2022</span>
                </span>
              </div>
              <div class="desc">
                Enrolled in Northcoders 12 week full stack software development
                course. Created a Fridge Tracker App using Machine Learning.
              </div>
            </div>
          </li>
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="flag wbg">April 2022</span>
                <span class="time-wrapper hide">
                  <span class="time">2022 - 2022</span>
                </span>
              </div>
              <div class="desc">
                Starting my first Software Engineering role
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
