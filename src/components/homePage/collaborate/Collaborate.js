import React from "react";
import OwnModal from "../../tools/modal/ownModal";
import "./collaborate.min.css";

const Collaborate = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleInputChange(e) {
    console.log(e.target.value);
  }

  const [showModal, setShowModal] = React.useState(true);

  return (
    <OwnModal onClick={() => setShowModal(false)} show={showModal}>
      <div className="collaborate-page card container">
        <form onSubmit={handleSubmit} className="add-contact-form">
          <div className="name-input input-container">
            <span className="label white-text">Nama Dosen :</span>
            <input
              className="add-contact-input"
              id="name"
              type="text"
              placeholder="Pak Iswanto"
              onChange={handleInputChange}
            />
          </div>
          <div className="number-input input-container">
            <span className="Label white-text">Nomor Handphone :</span>
            <div className="number-input-field">
              <span className="prefix white-text">+62 </span>
              <input
                className="add-contact-input number"
                type="text"
                placeholder="812 3456 7890"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="email-input input-container">
            <span className="addres-label white-text">Email :</span>
            <input
              className="add-contact-input"
              id="email"
              type="email"
              placeholder="fatwaanugerah21@gmail.com"
              onChange={handleInputChange}
            />
          </div>
          <div className="address-input input-container">
            <span className="addres-label white-text">Alamat :</span>
            <input
              className="add-contact-input"
              id="address"
              type="address"
              placeholder="Jl. Cakalang"
              onChange={handleInputChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </OwnModal>
  );
};
export default Collaborate;
