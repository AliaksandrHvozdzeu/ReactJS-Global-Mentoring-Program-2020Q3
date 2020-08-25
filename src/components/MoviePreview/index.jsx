import React from 'react';
import Poster from '../MoviePoster';
import MovieDetails from '../MovieDetails';
import PropTypes from 'prop-types';
import './style.css';
import Brand from '../Brand';
import img from '../../../public/images/search_42.png';

const MoviePreview = ({ details, closePreview }) => (
    <div className="preview-wrapper">
      <Brand/>
      <div className="movie-preview unselectable">
        <Poster src={details.poster} alt={details.alt}/>
        <MovieDetails details={details}/>
        <img src={img} className="close-preview" alt="close preview" onClick={closePreview}/>
      </div>
    </div>
);

MoviePreview.propTypes = {
  details: PropTypes.func.isRequired,
  closePreview: PropTypes.func.isRequired,
};

export default MoviePreview;
