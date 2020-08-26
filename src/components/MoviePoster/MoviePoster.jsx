import React from 'react';
import PropTypes from 'prop-types';
import NoPoster from '../MovieNoPoster';
import './style.css';

function showPoster(src, alt) {
  if (!src) {
    return <NoPoster/>;
  }
  return <img className="poster" src={src} alt={alt}/>;
}

const MoviePoster = ({ src, alt }) => (
  showPoster(src, alt)
);

MoviePoster.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number
};

export default MoviePoster;
