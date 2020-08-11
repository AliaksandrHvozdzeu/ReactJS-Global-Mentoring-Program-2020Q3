import React from 'react';
import AddButton from '../Buttons/AddButton';
import SearchButton from '../Buttons/SearchButton';
import SearchInput from '../Inputs/SearchInput';
import './style.css';

export default () => (
  <div className="search">
    <label htmlFor="search-field" className="search-title">
      FIND YOUR MOVIE
      <div className="search-panel">
        <SearchInput/>
        <SearchButton/>
        <AddButton/>
      </div>
    </label>
  </div>
);
