// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import UseDefaultPoster from '../../../hooks/useDefaultPoster';
import Constants from '../../../constants';
import '../css/MoviePoster.css';

export default function MoviePoster({ src, alt, className, fallback, onClick, onKeyDown }) {
  return UseDefaultPoster(src, alt, className, fallback, onClick, onKeyDown);
}

MoviePoster.propTypes = {
  src: PropTypes.string.isRequired,
  fallback: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

MoviePoster.defaultProps = {
  src: Constants.DEFAULT_POSTER,
  fallback: Constants.DEFAULT_POSTER,
  alt: 'movie poster logo',
  className: 'poster',
};
