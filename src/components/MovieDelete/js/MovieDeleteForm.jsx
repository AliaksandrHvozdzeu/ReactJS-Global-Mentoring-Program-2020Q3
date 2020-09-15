import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../../CloseButton';

const MovieDeleteForm = ({ closeAction, modalTitle, onMovieDeletion, details }) => {

  const onDelete = useCallback(() => {
    onMovieDeletion(details);
  }, [
    onMovieDeletion,
    details,
  ]);

  return (
    <>
      <CloseButton closeAction={closeAction}/>
      <section className="delete-modal">
        <p className="modal-title">{modalTitle}</p>
        <p className="delete-movie-description">
          Are you sure you want to delete this movie?
        </p>
        <button type="button"
                onClick={onDelete}
                className="submit-delete">
          Confirm
        </button>
      </section>
    </>
  );

};

MovieDeleteForm.propTypes = {
  closeAction: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired,
  onMovieDeletion: PropTypes.func.isRequired,
};

export default MovieDeleteForm;
