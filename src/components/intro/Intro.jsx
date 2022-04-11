import React from "react";
import "./intro.scss";
import Me from "../../img/profilepic.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-background-img"></div>
        <div className="intro-left-wrapper">
          <h2 className="intro-line">Hello, my name is</h2>
          <h1 className="intro-name">Neil Mergulhao</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Software Engineer 🧑🏾‍💻</div>
              <div className="intro-title-item">Full Stack Developer 🧑🏾‍💻</div>
              <div className="intro-title-item">Northcoders Alumni 👨🏾‍🎓</div>
              <div className="intro-title-item">Ex Business Consultant 💼</div>
            </div>
          </div>
          <p className="intro-description">
            Software Engineer based in Manchester. Northcoders Alumni
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="intro-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="intro-right">
        <div className="intro-background-img"></div>
        <div className="intro-background-circle"></div>
      </div>
    </div>
  );
};

export default Intro;
