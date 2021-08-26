import React from "react";
import { orderLink } from "../../constants";
import "./about-us.css";

const AboutUs = ({ className }) => {
  return (
    <div className={className}>
      <div className="about-us" id="about-us">
        <div className="page-name-position">
          <div data-aos="fade-right" className="page-name">
            Tentang Kami
          </div>
        </div>
        <div className="content" data-aos="zoom-out">
          <h1 className="title marginated">
            Mari Berkolaborasi Untuk Hasil Yang Maksimal
          </h1>
          <p className="text marginated">
            Dimasa yang serba instan dan penuh tantangan seperti saat ini, untuk
            survive dalam dunia bisnis adalah harus menjangkau consumer sebanyak
            mungkin serta memberikan konsumer kemudahan dalam untuk berinteraksi
            dengan kita. Salah satu yang sangat membantu untuk hal tersebut
            adalah memiliki produk digital utamanya website, namun membuat
            website yang sesuai pasar tidaklah mudah, oleh karena itu kami hadir
            untuk membantu anda menyelesaikan masalah produk digital anda dengan
            harga yang sangat terjangkau tetapi kualitas yang bertaraf
            international
          </p>
          <button>
            <a target="_blank" rel="noreferrer" href={orderLink}>
              Pesan Sekarang
            </a>
          </button>
          <p style={{ textAlign: "center" }} className="hashtag marginated">
            <strong>#KemudahanTeknologi</strong>
            <br />
            <strong>#KolaborasiUntukHasilYangMaksimal</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
