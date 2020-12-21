import React from "react";
import "./flow.min.css";

const Flow = ({ className }) => {
  return (
    <div className={className + " flow-page"} id="flow">
      <div className="page-name-position">
        <div className="page-name white-text">How We Do It</div>
      </div>
      <div className="items container">
        <div className="card">
          <img src="/images/analysis.svg" alt="analyze" />
          <h3>Research</h3>
          <p>
            We do a complex research to give the website that suitable for your
            business because it's very important so your customer will want to
            user your services
          </p>
        </div>
        <div className="card">
          <img src="/images/interaction.svg" alt="Get Deal" />
          <h3>Get the Deal</h3>
          <p>
            After we do research we ask you if you want to change something on
            our plan to build your website
          </p>
        </div>
        <div className="card">
          <img src="/images/delivered.svg" alt="Deliver" />
          <h3>Deliver The Website</h3>
          <p>
            We hosting it with your business name as domain, and your business
            ready to growth extremely fast and gain more money
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flow;
