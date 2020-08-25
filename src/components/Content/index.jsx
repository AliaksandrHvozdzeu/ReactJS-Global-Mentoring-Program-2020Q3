import React from 'react';
import Wrapper from '../Wrapper';
import ErrorBoundary from '../ErrorBoundary';
import Filter from '../MovieFilter';
import './style.css';
import PropTypes from 'prop-types';

const SearchResults = React.lazy(() => import('../SearchResults'));

const Content = ({ searchResults, onFilterByGenre, onSorting }) => (
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
);

Content.propTypes = {
  searchResults: PropTypes.func.isRequired,
  onFilterByGenre: PropTypes.func.isRequired,
  onSorting: PropTypes.func.isRequired,
};

export default Content;
