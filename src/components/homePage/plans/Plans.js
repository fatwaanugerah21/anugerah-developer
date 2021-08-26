import React from "react";
import { orderLink } from "../../constants";
import "./plans.min.css";

function Plans({ className }) {
  const items = [
    {
      title: "Website dan Design",
      text: "Anda hanya perlu mengontak kami, kami membuat design untuk website anda dan kami akan mengubahnya menjadi website yang berkualitas International yang siap anda gunakan",
      image: "/images/website-plan.jpg",
    },
    {
      title: "Website Standar International",
      text: "Inti dari sebuah website adalah kemampuannya untuk menarik konsumer agar lebih dekat dengan anda dimanapun mereka berada jadilah pionir sebagai bisnis yang memberikan pelayanan terbaik kepada konsumer dengan website yang berkualitas terbaik",
      image: "/images/phone-plans.jpg",
    },
    {
      title: "Research dan Implementasi",
      text: "Company website terbaik adalah website yang bisa menarik pelanggan menghabiskan waktu selama mungkin, untuk itu diperlukan research dan implementasi secara mendalam dalam pembuatannya, kami adalah partner yang pas untuk mendapatkan website terbaik untuk bisnis anda",
      image: "/images/winner-takes-all.jpg",
    },
  ];

  const showedItems = items.map((item, index) => {
    return (
      <div className="item">
        <img
          src={item.image}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          alt="contentImage"
          className="image"
        />
        <div
          className="content"
          data-aos={index % 2 === 1 ? "fade-right" : "fade-left"}
        >
          <h1>{item.title}</h1>
          <p>{item.text}</p>
          <button>
            <a href={orderLink}>Pesan Sekarang</a>
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className={className} id="plans">
      <div className="page-name-position">
        <div data-aos="fade-right" className="page-name white-text">
          Our Plans
        </div>
      </div>
      <div className="plans">{showedItems}</div>
    </div>
  );
}

export default Plans;
