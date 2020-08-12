import React from 'react';
import AddButton from '../Buttons/AddButton';
import SearchButton from '../Buttons/SearchButton';
import './style.css';

const SearchPanel = () => (
  <div className="search">
    <label htmlFor="search-field" className="search-title">
      FIND YOUR MOVIE
      <div className="search-panel">
        <input type="text" id="search-field" className="search-field" placeholder="What do you want to watch?"/>
        <SearchButton/>
        <AddButton/>
      </div>
    </label>
  </div>
)

export default SearchPanel;
