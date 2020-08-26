import React from 'react';
import './style.css';
import Constants from '../../constants';

const MovieNoPoster = () => (
  <>
    <img className="no-poster" src={Constants.NOT_FOUND_POSTER} alt="not-found-poster"/>
  </>
);

export default MovieNoPoster;
