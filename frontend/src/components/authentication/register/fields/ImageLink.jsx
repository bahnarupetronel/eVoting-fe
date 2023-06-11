import React, { useState } from "react";
import Modal from "react-modal";
import "../form.css";

export const ImageLink = ({ imageName, imageUrl }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <p onClick={openModal} className="state-info image-link">
        {" "}
        {imageName}{" "}
      </p>
      <Modal isOpen={modalOpen} onRequestClose={closeModal}>
        <img src={imageUrl} alt="Image" />
      </Modal>
    </>
  );
};

export default ImageLink;
