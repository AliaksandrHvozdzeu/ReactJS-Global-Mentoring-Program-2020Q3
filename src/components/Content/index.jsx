import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import ErrorBoundary from '../ErrorBoundary';
import Filter from '../MovieFilter';
import SearchResults from '../SearchResults';
import './style.css';

const Content = ({ searchResults }) => (
  <main>
    <ErrorBoundary>
      <Wrapper>
        <Filter/>
        <SearchResults searchResults={searchResults}/>
      </Wrapper>
    </ErrorBoundary>
  </main>
);

Content.propTypes = {
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

export default Content;
