import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import AddButton from '../AddButton';
import Brand from '../Brand';
import Wrapper from '../Wrapper';
import './style.css';

const SearchPanel = ({ filterByName, onFilterByName }) => {

  const [searchString, setSearchString] = useState(filterByName);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onFilterByName(searchString);
    }
  };

  const onSearch = useCallback(() => onFilterByName(searchString), [
    searchString,
    onFilterByName,
  ]);

  return (
    <>
      <Wrapper>
        <Brand/>
        <div className="search">
            <label htmlFor="search-field" className="search-title">
              FIND YOUR MOVIE
              <div className="search-panel">
                <input type="text"
                       id="search-field"
                       className="search-field"
                       placeholder="What do you want to watch?"
                       onKeyDown={handleKeyDown}
                       value={searchString}
                       onChange={(e) => setSearchString(e.target.value)}/>
                <button type="button" className="search-button" onClick={onSearch}>Search</button>
                <AddButton/>
              </div>
            </label>
        </div>
      </Wrapper>
    </>
  );
};

SearchPanel.propTypes = {
  filterByName: PropTypes.string.isRequired,
  onFilterByName: PropTypes.func.isRequired,
};

export default SearchPanel;
