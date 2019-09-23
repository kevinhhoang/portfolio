import React from "react";
import avatar from "./avatar.png";
import githublogo from "./githublogo.png";
import linkedinlogo from "./linkedinlogo.png";

import "./Main.css";

const Main = () => {
  return (
    <div className="hero-home">
      <div className="container">
        <div className="home-content">
          <div className="avatar-container">
            <img className="avatar" src={avatar} alt="avatar" />
          </div>
          <div className="line-separation" />
          <h1 className="main-text">KvhHng</h1>
          <p className="sub-text">
            Front-end developer, UX/UI, Keyboard enthusiast
          </p>
          <ul>
            <a className="link" href="https://github.com/kevinhhoang">
              <img src={githublogo} alt="github logo" />
            </a>
            <a className="link" href="https://www.linkedin.com/in/hoangkevinh/">
              <img src={linkedinlogo} alt="linkedin logo" />
            </a>
          </ul>
        </div>
      </div>
      <div className="gradient-bg">
        <div className="bg-color">
          <span className="gradient-highlight" />
        </div>
      </div>
    </div>
  );
};

export default Main;
