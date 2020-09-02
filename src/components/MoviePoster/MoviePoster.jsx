import React from 'react';
import PropTypes from 'prop-types';
import Constants from '../../constants';
import UseDefaultPoster from '../../utils/useDefaultPoster';
import './style.css';

export default function MoviePoster({ src, alt, className }) {
  return UseDefaultPoster(src, alt, className);
}

MoviePoster.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

MoviePoster.defaultProps = {
  src: Constants.NOT_FOUND_POSTER,
  alt: 'movie poster logo',
  className: 'poster',
};
