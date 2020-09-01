import React from 'react';
import PropTypes from 'prop-types';
import Search from '../SearchPanel';
import MoviePreview from '../MoviePreview';
import './style.css';

export default function Header({ details, closePreview, onFilterByName, filterByName }) {

  return (
    <>
      <header id="header">
        {details && <MoviePreview details={details} closePreview={closePreview}/>}
        {!details && <Search filterByName={filterByName} onFilterByName={onFilterByName}/>}
      </header>
    </>
  );

}

Header.propTypes = {
  details: PropTypes.object.isRequired,
  closePreview: PropTypes.func.isRequired,
  onFilterByName: PropTypes.string.isRequired,
  filterByName: PropTypes.string.isRequired,
};
