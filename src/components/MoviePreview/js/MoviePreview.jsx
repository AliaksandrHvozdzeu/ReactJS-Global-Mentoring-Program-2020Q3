import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import MovieDetails from '../../MovieDetails';
import Brand from '../../Brand';
// eslint-disable-next-line import/no-cycle
import Header from '../../Header';
import img from '../../../../public/images/search_42.png';
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
  details: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
};
