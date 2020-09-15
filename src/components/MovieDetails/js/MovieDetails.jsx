import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/MovieDetails.css';
import defaultPoster from '../../../../public/images/not-found.png';
import MoviePoster from '../../MoviePoster';
import PosterPreview from '../../PosterPreview/js/PosterPreview';

export default function MovieDetails({ details }) {

  const [isOpen, setIsOpen] = useState(false);

  const defaultVoteAverage = (voteAverage) => {
    return voteAverage === undefined ? '0.0' : voteAverage;
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (details == null) {
    return (
      <div className="movie-details-not-found">
        Movie wasn't found, choose another.
      </div>
    );
  } else {
    return (
      <>
        <MoviePoster src={details.poster_path} alt={details.alt} fallback={defaultPoster} onClick={openModal}/>
        <div className="movie-preview-description-block">
          <h1 className="movie-preview-title">{details.title}</h1>
          <p className="movie-preview-rating">{defaultVoteAverage(details.vote_average)}</p>
          <p className="movie-preview-genres">{details.genres.join(', ')}</p>
          <p className="movie-preview-release">{new Date(details.release_date).getFullYear()}</p>
          <p className="movie-preview-runtime">{details.runtime}</p>
          <p className="movie-preview-description">{details.overview}</p>
        </div>
        <PosterPreview isOpen={isOpen}
                       onClose={closeModal}
                       src={details.poster_path}
                       alt="movie poster preview"
                       fallback={defaultPoster}/>
      </>
    );
  }

}

MovieDetails.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
};

