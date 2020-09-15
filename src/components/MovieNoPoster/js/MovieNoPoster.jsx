import React from 'react';
import '../css/MovieNoPoster.css';
import Constants from '../../../constants';

export default function MovieNoPoster() {

  return (
    <>
      <img className="no-poster" src={Constants.NOT_FOUND_POSTER} alt="not-found-poster"/>
    </>
  );

}
