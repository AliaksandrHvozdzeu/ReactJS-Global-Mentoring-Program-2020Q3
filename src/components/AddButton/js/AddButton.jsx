import React, { useState } from 'react';
import MovieModal from '../../MovieModal';
import MovieAdd from '../../MovieAdd';
import '../css/AddButton.css';

const AddButton = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalContent = (
    <MovieAdd closeAction={closeModal} modalTitle="ADD MOVIE"/>
  );

  return (
    <div className="App">
      <button type="button" className="add-button" onClick={openModal}>+ ADD MOVIE</button>
      <MovieModal isOpen={isOpen}
                  openModal={openModal}
                  modalContent={modalContent}/>
    </div>
  );
};

export default AddButton;
