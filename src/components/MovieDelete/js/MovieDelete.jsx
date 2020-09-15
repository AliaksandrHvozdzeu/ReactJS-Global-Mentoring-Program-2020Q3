import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/MovieDelete.css';
import movieActions from '../../../store/actions/movie';
import MovieDeleteForm from './MovieDeleteForm';

const MovieDelete = ({ modalTitle, closeAction, onMovieDeletion, details }) => {

  return (
    <MovieDeleteForm modalTitle={modalTitle}
                     closeAction={closeAction}
                     onMovieDeletion={onMovieDeletion}
                     details={details}/>
  );

};

MovieDelete.propTypes = {
  details: PropTypes.object.isRequired,
  modalTitle: PropTypes.string.isRequired,
  closeAction: PropTypes.func.isRequired,
  onMovieDeletion: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies.details,
});

const mapDispatchToProps = (dispatch) => ({
  onMovieDeletion: (details) => dispatch(movieActions.deleteMovie(details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDelete);
