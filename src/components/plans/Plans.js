import React from "react";
import "./plans.min.css";
import image from "./backgroundcopy.jpg";

function Plans({ className }) {
  const items = [
    {
      title: "Mantul",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,repudiandae blanditiis. Quasi illo nam consectetur nisi libero,voluptatum aliquam, modi quis accusamus vero perferendis labore",
      image: "./background.jpg",
    },
    {
      title: "Assiap",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,repudiandae blanditiis. Quasi illo nam consectetur nisi libero,voluptatum aliquam, modi quis accusamus vero perferendis labore",
      image: "./background.jpg",
    },
    {
      title: "Jancuy",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,repudiandae blanditiis. Quasi illo nam consectetur nisi libero,voluptatum aliquam, modi quis accusamus vero perferendis labore",
      image: "./background.jpg",
    },
  ];

  const showedItems = items.map((item) => {
    return (
      <div className="item">
        <img src={image} alt="contentImage" className="image" />
        <div className="content">
          <h1>{item.title}</h1>
          <p>{item.text}</p>
          <button>Order Now</button>
        </div>
      </div>
    );
  });

  return (
    <div className={className}>
      <div className="page-name-position">
        <div className="page-name white-text">How We Solve Your Problem</div>
      </div>
      <div className="plans">{showedItems}</div>
    </div>
  );
}

export default Plans;
