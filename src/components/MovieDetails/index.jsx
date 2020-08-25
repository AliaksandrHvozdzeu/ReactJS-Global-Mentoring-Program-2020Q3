import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function ratingGradient(rating) {
  return rating >= 3 && rating <= 3.5 ? <p className="movie-preview-rating-yellow">{rating}</p> : rating < 3 ?
    <p className="movie-preview-rating-red">{rating}</p> : <p className="movie-preview-rating">{rating}</p>;
}

const MovieDetails = ({ details }) => (
  <div className="movie-preview-description-block">
    <h1 className="movie-preview-title">{details.title}</h1>
    {ratingGradient(details.rating)}
    <p className="movie-preview-genres">{details.genres.join(', ')}</p>
    <p className="movie-preview-release">{new Date(details.release).getFullYear()}</p>
    <p className="movie-preview-runtime">{details.runtime}</p>
    <p className="movie-preview-description">{details.description}</p>
  </div>
);

MovieDetails.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    release: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default MovieDetails;
