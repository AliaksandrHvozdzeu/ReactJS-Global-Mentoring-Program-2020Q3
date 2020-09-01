import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import ErrorBoundary from '../ErrorBoundary';
import Filter from '../MovieFilter';
import './style.css';

export default function Content({ searchResults, onFilterByGenre, onSorting }) {

  const SearchResults = React.lazy(() => import('../SearchResults'));

  return (
    <>
      <main>
        <ErrorBoundary>
          <Wrapper>
            <Filter onFilterByGenre={onFilterByGenre} onSorting={onSorting}/>
            <React.Suspense fallback={<h3>Loading... Please wait.</h3>}>
              <SearchResults searchResults={searchResults}/>
            </React.Suspense>
          </Wrapper>
        </ErrorBoundary>
      </main>
    </>
  );

}

Content.propTypes = {
  searchResults: PropTypes.array.isRequired,
  onFilterByGenre: PropTypes.func.isRequired,
  onSorting: PropTypes.func.isRequired,
};
