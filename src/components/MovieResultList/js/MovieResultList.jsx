import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Movie from '../../Movie';
import SearchResultCount from './SearchResultCount';
import '../css/MovieResultList.css';

const MovieResultList = ({ movies }) => {

  const getExtraRandomID = () => {
    return Math.floor(Math.random() * Math.floor(1000));
  };

  return (
    <section className="movie-result">
      <SearchResultCount count={movies.length}/>
      <div className="movie-result-list">
        {movies.map((movieDetails) => (
          <Movie key={`${movieDetails.id  }_${  getExtraRandomID()}`} details={movieDetails}/>
        ))}
      </div>
    </section>
  );

};

MovieResultList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.string),
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number,
    }).isRequired,
  ).isRequired,
};

const mapStateToProps = (state) => ({ movies: state.movies.filteredResults });

export default connect(mapStateToProps, null)(MovieResultList);
