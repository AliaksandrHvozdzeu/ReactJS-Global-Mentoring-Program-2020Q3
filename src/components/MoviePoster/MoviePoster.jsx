import React from 'react';
import PropTypes from 'prop-types';
import NoPoster from '../MovieNoPoster';
import Constants from '../../constants';
import './style.css';

export default function MoviePoster({ src, alt }) {

  function handleImageError() {
    return (
      <>
        <img className="poster" src={Constants.NOT_FOUND_POSTER} alt="no-poster"/>
      </>
    );
  }

  if (!src) {
    return <NoPoster/>;
  }
  return <img onError={handleImageError} className="poster" src={src} alt={alt}/>;

}

MoviePoster.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
