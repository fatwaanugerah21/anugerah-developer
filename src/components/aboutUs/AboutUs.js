import React from "react";
import "./about-us.min.css";

const AboutUs = ({ className }) => {
  return (
    <div className={className}>
      <div className="about-us" id="about-us">
        <div className="page-name-position">
          <div className="page-name">Tentang Kami</div>
        </div>
        <div className="content">
          <h1 className="title marginated">Reach All Over The World With Us</h1>
          <p className="text marginated">
            In this technology era, to reach world market is so easy, you can
            use website for your business and it will spread as hell choose us
            and we will give you the most suit website for your business Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt quod
            nam sint facilis, provident, tempora et voluptate debitis
            praesentium ullam sequi impedit quisquam nostrum, minus ipsum quae
            recusandae? Hic.
          </p>
          <p className="hashtag marginated">#GrowWithTech</p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
