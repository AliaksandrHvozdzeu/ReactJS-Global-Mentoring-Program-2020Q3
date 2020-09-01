import React from 'react';
import PropTypes from 'prop-types';
import NotFound from '../NotFoundMovie';
import './style.css';

export default function SearchResults({ searchResults }) {

  const MovieResults = React.lazy(() => import('../MovieResultList'));

  return (
    <>
      {searchResults && (
        <React.Suspense fallback={<h3>Loading... Please wait.</h3>}>
          <MovieResults results={searchResults}/>
        </React.Suspense>
      )}
      {!searchResults && <NotFound/>}
    </>
  );

}

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
      release: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
