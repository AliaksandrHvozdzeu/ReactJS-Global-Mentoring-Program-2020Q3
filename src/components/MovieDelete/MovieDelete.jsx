import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../CloseButton';
import './style.css';

export default function MovieDelete({ modalTitle, closeAction, deleteAction }) {

  return (
    <>
      <CloseButton closeAction={closeAction}/>
      <section className="delete-modal">
        <p className="modal-title">{modalTitle}</p>
        <p className="delete-movie-description">
          Are you sure you want to delete this movie?
        </p>
        <button type="button" onClick={deleteAction} className="submit-delete">Confirm</button>
      </section>
    </>
  );

}

MovieDelete.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  closeAction: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
};
