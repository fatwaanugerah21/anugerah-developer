import React from "react";
import "./plans.min.css";

function Plans({ className }) {
  const items = [
    {
      title: "Reach the sky",
      text:
        "Give your business a fast and agile website so your customer will impressed with your services, and he will comeback to you so you can gain more money",
      image: "/images/website-plan.jpg",
    },
    {
      title: "Stay with your customer every time",
      text:
        "Get your store installed in their phone, so it will be easier to turn them back to you because every teenager and old people and even a children using a phone in this era",
      image: "/images/phone-plans.jpg",
    },
    {
      title: "The winner takes all",
      text:
        "We help you to get a powerfull website and mobile apps, you will get very great impression and your business will spread very fast, because your customer is the king so give them the best services",
      image: "/images/winner-takes-all.jpg",
    },
  ];

  const showedItems = items.map((item) => {
    return (
      <div className="item">
        <img src={item.image} alt="contentImage" className="image" />
        <div className="content">
          <h1>{item.title}</h1>
          <p>{item.text}</p>
          <button>Order Now</button>
        </div>
      </div>
    );
  });

  return (
    <div className={className} id="plans">
      <div className="page-name-position">
        <div className="page-name white-text">Our Plans</div>
      </div>
      <div className="plans">{showedItems}</div>
    </div>
  );
}

export default Plans;
