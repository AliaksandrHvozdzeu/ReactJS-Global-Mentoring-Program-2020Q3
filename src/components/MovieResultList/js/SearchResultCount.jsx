import React from 'react';
import PropTypes from 'prop-types';

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

export default SearchResultCount;
