import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import CloseButton from '../CloseButton';

const MovieDelete = ({ modalTitle, closeAction, deleteAction }) => (
  <>
    <CloseButton closeAction={closeAction}/>
    <section className="delete-modal">
      <p className="modal-title">{modalTitle}</p>
      <p className="delete-movie-description">
        Are you sure you want to delete this movie?
      </p>
      <button onClick={deleteAction} className="submit-delete">Confirm</button>
    </section>
  </>
);

MovieDelete.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  closeAction: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired
};

export default MovieDelete;
