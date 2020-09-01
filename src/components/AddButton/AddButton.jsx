import React, { useState } from 'react';
import MovieModal from '../MovieModal';
import MovieAdd from '../MovieAdd';
import './style.css';


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
      <MovieModal isOpen={isOpen} openModal={openModal} modalContent={<MovieAdd closeAction={closeModal} modalTitle="ADD MOVIE"/>}/>
    </div>
  );
}
