import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddButton from '../../AddButton';
import Brand from '../../Brand';
import Wrapper from '../../Wrapper';
import { movieActions } from '../../../store/actions';
import '../css/SearchPanel.css';

let searchValue = null;

const SearchPanel = ({ onSearch, loadMoviesAfterClearSearch }) => {

  const [searchString, setSearchString] = useState('');
  const [isMessageFrame, setIsMessageFrame] = useState(false);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        onSearch();
      }
    },
    [searchString],
  );

  const showMessage = () => {
    setIsMessageFrame(true);
  };

  const handleSearch = () => {
    return searchValue === '' || searchValue === null || searchValue === undefined ? (
      <button type="button" className="search-button" onClick={showMessage}>Search</button>
    ) : (
      <button type="button" className="search-button" onClick={onSearch}>Search</button>
    );
  };

  const onClearSearchField = (target) => {
    if (target.value === '') {
      loadMoviesAfterClearSearch();
    }
  };

  return (
    <>
      <Wrapper>
        <Brand/>
        <div className="search">
          <label htmlFor="search-field" className="search-title">
            FIND YOUR MOVIE
            <div className="search-panel">
              <input id="search-field"
                     type="search"
                     className="search-field"
                     placeholder="What do you want to watch?"
                     onKeyDown={handleKeyDown}
                     value={searchString}
                     onInput={(e) => {
                       onClearSearchField(e.target);
                     }}
                     onChange={(e) => {
                       searchValue = e.target.value;
                       setSearchString(e.target.value);
                       setIsMessageFrame(false);
                     }}/>
              {handleSearch()}
              <AddButton/>
              {isMessageFrame && (
                <div role="presentation"
                     className="search-input-message"
                     onClick={() => setIsMessageFrame(false)}>
                  Please enter the part of title or full title of the movie to search!
                </div>
              )}
            </div>
          </label>
        </div>
      </Wrapper>
    </>
  );

};

SearchPanel.propTypes = {
  onSearch: PropTypes.func.isRequired,
  loadMoviesAfterClearSearch: PropTypes.func.isRequired,
};

SearchPanel.defaultProps = {};

const mapStateToProps = (state) => ({
  movies: state.searchString,
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: () => dispatch(movieActions.getMovieByTitle(searchValue)),
  loadMoviesDefault: () => dispatch(movieActions.loadMoviesDefault()),
  loadMoviesAfterClearSearch: () => dispatch(movieActions.loadMoviesAfterClearSearch()),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
