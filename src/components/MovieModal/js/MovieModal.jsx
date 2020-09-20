import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import '../css/MovieModal.css';

export default function MovieModal({ isOpen, openModal, modalContent }) {
  return (
    <>
      <Modal isOpen={isOpen}
             onRequestClose={openModal}
             className="add-movie-modal"
             overlayClassName="add-movie-modal-overlay"
             ariaHideApp={false}
             shouldCloseOnOverlayClick={false}
      >
        <div>
          {modalContent}
        </div>
      </Modal>
    </>
  );
}

MovieModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  modalContent: PropTypes.object.isRequired,
};
