import React from "react";
import "./LandingPage.min.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="content">
        <div className="background absolute-center full-size" />
        <div className="cut-corner-top" />
        <div className="title">
          <h1>Anugerah Developer</h1>
        </div>

        <p className="quote">
          Give your business a <span className="pressurer">Powerfull </span>
          website
        </p>

        <a href="#about-us" className="to-next circle">
          <img src="/images/next.svg" alt="mantap" />
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
