import React, { useState } from 'react';
import './style.css';
import Modal from 'react-modal';
import MovieAdd from '../MovieAdd';

export default function AddButton() {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <button type="button" className="add-button" onClick={openModal}>+ ADD MOVIE</button>
      <Modal isOpen={isOpen}
             onRequestClose={openModal}
             className="add-movie-modal"
             overlayClassName="add-movie-modal-overlay"
             shouldCloseOnOverlayClick={false}
      >
        <div>
          <MovieAdd closeAction={closeModal} modalTitle="ADD MOVIE"/>
        </div>
      </Modal>
    </div>
  );
}
