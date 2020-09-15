import React from 'react';
import PropTypes from 'prop-types';
import MovieDetails from '../../MovieDetails';
import Brand from '../../Brand';
import img from '../../../../public/images/search_42.png';
import { render } from 'react-dom';
import Header from '../../Header';
import '../css/MoviePreview.css';

export default function MoviePreview({ details }) {

  const closePreview = () => {
    const header = document.getElementById('header');
    render(<Header closePreview="" details="" blur={false}/>, header);
  };

  return (
    <>
      <div className="preview-wrapper">
        <Brand/>
        <div className="movie-preview unselectable">
          <MovieDetails details={details}/>
        </div>
        <button className="close-preview-button"
                type="button"
                onClick={closePreview}
                onKeyDown={closePreview}>
          <img src={img}
               className="close-preview"
               alt="close preview"/>
        </button>
      </div>
    </>
  );

}

MoviePreview.propTypes = {
  details: PropTypes.func.isRequired,
};
