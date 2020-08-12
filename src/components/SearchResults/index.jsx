import React  from 'react';
import PropTypes from 'prop-types';
import MovieResults from '../MovieResultList';
import NotFound from '../NotFoundMovie';
import './style.css';

const SearchResults = ({ searchResults }) => (
  <>
    {searchResults && <MovieResults results={searchResults} />}
    {!searchResults && <NotFound />}
  </>
);

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      release: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default SearchResults;
