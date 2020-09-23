import React from 'react';
import PropTypes from 'prop-types';
import MovieBaseForm from '../../MovieBaseForm';

const MovieEditForm = (
  {
    closeAction,
    modalTitle,
    initialState = {},
    availableGenres,
    onSubmit,
  },
) => {

  return (
    <>
      <MovieBaseForm
        onSubmit={onSubmit}
        modalTitle={modalTitle}
        closeAction={closeAction}
        initialState={initialState}
        availableGenres={availableGenres}
      />
    </>
  );

};

MovieEditForm.propTypes = {
  closeAction: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  initialState: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }).isRequired,
  availableGenres: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieEditForm;
