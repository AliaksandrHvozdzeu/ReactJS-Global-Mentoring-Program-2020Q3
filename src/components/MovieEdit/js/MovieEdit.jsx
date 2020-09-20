import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { movieActions } from '../../../store/actions';
import Constants from '../../../constants';
import '../css/MovieEdit.css';
import MovieEditForm from './MovieEditForm';

const MovieEdit = ({ modalTitle, closeAction, initialState = {}, onSubmit }) => {

  const availableGenres = useMemo(() => {
    const defaultGenresNames = Constants.DEFAULT.map((genre) => genre.value);
    const uniqueGenres = [...new Set([...initialState.genres, ...defaultGenresNames])].sort();
    return uniqueGenres.map((genre) => ({ label: genre, value: genre }));
  }, [initialState.genres]);

  return (
    <MovieEditForm closeAction={closeAction}
                   modalTitle={modalTitle}
                   initialState={initialState}
                   availableGenres={availableGenres}
                   onSubmit={onSubmit}/>
  );

};

MovieEdit.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  closeAction: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

MovieEdit.defaultProps = {
  initialState: {},
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(movieActions.editMovie(data)),
});

const mapStateToProps = (state) => ({
  genres: state.movies.genres.filter((genre) => genre !== Constants.ALL_GENRES),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieEdit);

