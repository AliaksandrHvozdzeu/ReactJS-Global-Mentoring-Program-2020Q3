import React from 'react';
import PropTypes from 'prop-types';
import MovieMenu from '../MovieMenu';
import './style.css';

function deleteMovie() {
  // TODO: Implement method for deleting movie by movie ID
}

function editMovie() {
  // TODO: Implement method for adding new movie
}

const Movie = ({ details }) => (
  <div className="movie-result-item movie">
    <img className="movie-logo" src={details.url} alt="movie poster" />
    <div className="movie-description">
      <button className="movie-title" type="button">{details.title}</button>
      <p className="movie-genre">{details.genre}</p>
      <p className="movie-release">{details.release}</p>
    </div>
    <MovieMenu
      deleteAction={() => deleteMovie()}
      editAction={() => editMovie()}
    />
  </div>
);

Movie.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired
  }).isRequired
};

export default Movie;
