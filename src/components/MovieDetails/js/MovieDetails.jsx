import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MoviePoster from '../../MoviePoster';
import PosterPreview from '../../PosterPreview/js/PosterPreview';
import Constants from '../../../constants';
import '../css/MovieDetails.css';

const MovieDetails = ({ details }) => {

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

  const onJoinGenres = () => {
    return details.genres.join(', ');
  };

  return details == null ? (
    <div className="movie-details-not-found">
      Movie was not found, choose another.
    </div>
  ) : (
    <>
      <MoviePoster src={details.poster_path} alt="Movie poster" fallback={Constants.DEFAULT_POSTER} onClick={openModal}/>
      <div className="movie-preview-description-block">
        <h1 className="movie-preview-title">{details.title}</h1>
        <p className="movie-preview-rating">{defaultVoteAverage(details.vote_average)}</p>
        <p className="movie-preview-genres">{onJoinGenres}</p>
        <p className="movie-preview-release">{new Date(details.release_date).getFullYear()}</p>
        <p className="movie-preview-runtime">{details.runtime}</p>
        <p className="movie-preview-description">{details.overview}</p>
      </div>
      <PosterPreview isOpen={isOpen}
                     onClose={closeModal}
                     src={details.poster_path}
                     alt="movie poster preview"
                     fallback={Constants.DEFAULT_POSTER}/>
    </>
  );

}

MovieDetails.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    vote_average: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }),
};

export default MovieDetails;

