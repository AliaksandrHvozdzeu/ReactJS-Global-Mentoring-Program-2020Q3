import React from 'react';
import PropTypes from 'prop-types';
import Poster from '../MoviePoster';
import MovieDetails from '../MovieDetails';
import Brand from '../Brand';
import img from '../../../public/images/search_42.png';
import './style.css';

const MoviePreview = ({ details, closePreview }) => (
    <div className="preview-wrapper">
      <Brand/>
      <div className="movie-preview unselectable">
        <Poster src={details.poster} alt={details.alt}/>
        <MovieDetails details={details}/>
        <button type="button" onClick={closePreview} onKeyDown={closePreview}>
          <img src={img} className="close-preview" alt="close preview"/>
        </button>
      </div>
    </div>
);

MoviePreview.propTypes = {
  details: PropTypes.func.isRequired,
  closePreview: PropTypes.func.isRequired,
};

export default MoviePreview;
