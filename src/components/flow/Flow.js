import React from "react";
import "./flow.min.css";

const Flow = ({ className }) => {
  return (
    <div className={className}>
      <div className="flow">
        <div className="page-name-position">
          <div className="page-name white-text">How We Solve Your Problem</div>
        </div>
        <div className="items container">
          <div className="card">
            <img src="/images/analysis.svg" alt="analyze" />
            <h3>Research</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              obcaecati nam harum incidunt fugiat, ex praesentium saepe ullam
              similique ipsa temporibus soluta eveniet, in nulla ipsam facere
              possimus ducimus dicta esse deleniti, voluptas expedita omnis
              perspiciatis? Dolor, magni officiis, nam earum similique nostrum
              ipsam obcaecati accusantium molestiae, commodi tenetur esse.
            </p>
          </div>
          <div className="card">
            <img src="/images/interaction.svg" alt="Get Deal" />
            <h3>Get the Deal</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              obcaecati nam harum incidunt fugiat, ex praesentium saepe ullam
              similique ipsa temporibus soluta eveniet, in nulla ipsam facere
              possimus ducimus dicta esse deleniti, voluptas expedita omnis
              perspiciatis? Dolor, magni officiis, nam earum similique nostrum
              ipsam obcaecati accusantium molestiae, commodi tenetur esse.
            </p>
          </div>
          <div className="card">
            <img src="/images/delivered.svg" alt="Deliver" />
            <h3>Deliver The Website</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              obcaecati nam harum incidunt fugiat, ex praesentium saepe ullam
              similique ipsa temporibus soluta eveniet, in nulla ipsam facere
              possimus ducimus dicta esse deleniti, voluptas expedita omnis
              perspiciatis? Dolor, magni officiis, nam earum similique nostrum
              ipsam obcaecati accusantium molestiae, commodi tenetur esse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flow;
