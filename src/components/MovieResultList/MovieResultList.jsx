import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie';
import './style.css';

const SearchResultCount = ({ count }) => (
  <div className="movie-result-title">
    <p className="movie-result-text">
      <span className="movie-result-count">{count}</span>
      movies found
    </p>
  </div>
);

SearchResultCount.propTypes = {
  count: PropTypes.number.isRequired,
};

const MovieResultList = ({ results }) => (
  <section className="movie-result">
    <SearchResultCount count={results.length} />
    <div className="movie-result-list">
      {results.map((movieDetails) => (
        <Movie key={movieDetails.id} details={movieDetails} />
      ))}
    </div>
  </section>
);

MovieResultList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
      release: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default MovieResultList;
