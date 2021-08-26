import React from "react";
import { orderLink } from "../../constants";
import "./flow.css";

const Flow = ({ className }) => {
  return (
    <div className={className + " flow-page"} id="flow">
      <div className="page-name-position">
        <div data-aos="fade-right" className="page-name white-text">
          Cara Kami Menyelesaikan Masalah
        </div>
      </div>
      <div className="items container">
        <div data-aos="fade-up" data-aos-duration="1000" className="card">
          <img src="/images/analysis.svg" alt="analyze" />
          <h3>Research</h3>
          <p>
            Langkah awal adalah mengetahui apa yang dibutuhkan perusahaan anda,
            dengan begitu kita bisa memberikan solusi terbaik untuk konsumer
            anda
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className="card">
          <img src="/images/interaction.svg" alt="Get Deal" />
          <h3>Merancang Solusi</h3>
          <p>
            Kami akan merancang solusi yang dapat menyelesaikan masalah digital
            perusahaan anda dan tentu saja memberikan transparansi dalam
            perancangan tersebut
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="card">
          <img src="/images/delivered.svg" alt="Deliver" />
          <h3>Launching Produk</h3>
          <p>
            Produk siap melakukan tugasnya yaitu mendapatkan hati konsumer
            dengan cara memberikan pelayanan terbaik kepada mereka
          </p>
        </div>
      </div>
      <button>
        <a target="_blank" rel="noreferrer" href={orderLink}>
          Pesan Sekarang
        </a>
      </button>
    </div>
  );
};

export default Flow;
