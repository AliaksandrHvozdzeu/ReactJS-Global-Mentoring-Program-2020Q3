import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Constants from '../../../constants';
import MovieAddForm from './MovieAddForm';
import { movieActions } from '../../../store/actions';
import '../css/MovieAdd.css';

const MovieAdd = ({ modalTitle, closeAction, onSubmit }) => {

  const availableGenres = useMemo(() => {
    const defaultGenresNames = Constants.DEFAULT.map((genre) => genre.value).sort();
    return defaultGenresNames.map((genre) => ({ label: genre, value: genre })).sort();
  }, [Constants.DEFAULT]);

  return (
    <>
      <MovieAddForm closeAction={closeAction}
                    modalTitle={modalTitle}
                    availableGenres={availableGenres}
                    onSubmit={onSubmit}/>
    </>
  );

};

MovieAdd.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  closeAction: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(movieActions.addMovie(data)),
});

const mapStateToProps = (state) => ({
  genres: state.movies.genres.filter((genre) => genre !== Constants.ALL_GENRES),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieAdd);

