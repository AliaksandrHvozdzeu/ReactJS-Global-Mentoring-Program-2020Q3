import React, { useState } from 'react';
import MovieModal from '../../MovieModal';
import MovieAdd from '../../MovieAdd';
import '../css/AddButton.css';

const AddButton = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openAddModal = () => {
    setIsOpen(!isOpen);
  };

  const closeAddModal = () => {
    setIsOpen(false);
  };

  const modalContent = (
    <MovieAdd closeAction={closeAddModal} modalTitle="ADD MOVIE"/>
  );

  return (
    <>
      <button type="button" className="add-button" onClick={openAddModal}>+ ADD MOVIE</button>
      <MovieModal isOpen={isOpen}
                  openModal={openAddModal}
                  modalContent={modalContent}/>
    </>
  );
};

export default AddButton;
