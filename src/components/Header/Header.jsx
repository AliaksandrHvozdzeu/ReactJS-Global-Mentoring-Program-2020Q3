import React from 'react';
import PropTypes from 'prop-types';
import Search from '../SearchPanel';
import MoviePreview from '../MoviePreview';
import './style.css';

const Header = ({ details, closePreview, onFilterByName, filterByName }) => (
  <header id="header">
    {details && <MoviePreview details={details} closePreview={closePreview}/>}
    {!details && <Search filterByName={filterByName} onFilterByName={onFilterByName}/>}
  </header>
);

Header.propTypes = {
  details: PropTypes.string.isRequired,
  closePreview: PropTypes.func.isRequired,
  onFilterByName: PropTypes.string.isRequired,
  filterByName: PropTypes.string.isRequired
};

export default Header;
