import React from 'react';
import PropTypes from 'prop-types';
import MovieBaseForm from '../../MovieBaseForm';

const MovieAddForm = (
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

MovieAddForm.propTypes = {
  closeAction: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  initialState: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }),
  availableGenres: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

MovieAddForm.defaultProps = {
  initialState: {},
};

export default MovieAddForm;
