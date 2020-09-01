import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Poster from '../MoviePoster';

export default function MovieDetails({ details }) {

  if (details == null) {
    return (
      <div className="movie-details-not-found">
        Movie wasn't found, choose another.
      </div>
    );
  } else {
    return (
      <>
        <Poster src={details.poster} alt={details.alt}/>
        <div className="movie-preview-description-block">
          <h1 className="movie-preview-title">{details.title}</h1>
          <p className="movie-preview-rating">{details.rating}</p>
          <p className="movie-preview-genres">{details.genres.join(', ')}</p>
          <p className="movie-preview-release">{new Date(details.release).getFullYear()}</p>
          <p className="movie-preview-runtime">{details.runtime}</p>
          <p className="movie-preview-description">{details.description}</p>
        </div>
      </>
    );
  }

}

MovieDetails.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    rating: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release: PropTypes.string,
    runtime: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

