import React from 'react';
import Search from '../SearchPanel';
import './style.css';
import MoviePreview from '../MoviePreview';

const Header = ({ details, closePreview, onFilterByName, filterByName }) => (
  <header id="header">
    {details && <MoviePreview details={details} closePreview={closePreview}/>}
    {!details && <Search filterByName={filterByName} onFilterByName={onFilterByName}/>}
  </header>
);

export default Header;
