import React from 'react';
import PropTypes from 'prop-types';
import NotFound from '../NotFoundMovie';
import './style.css';

const MovieResults = React.lazy(() => import('../MovieResultList/MovieResultList'));

const SearchResults = ({ searchResults }) => (
  <>
    {searchResults && (
      <React.Suspense fallback={<h3>Loading... Please wait.</h3>}>
        <MovieResults results={searchResults}/>
      </React.Suspense>
    )}
    {!searchResults && <NotFound/>}
  </>
);

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      release: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SearchResults;
