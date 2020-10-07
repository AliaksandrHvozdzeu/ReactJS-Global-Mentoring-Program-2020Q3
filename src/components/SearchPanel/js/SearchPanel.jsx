import React, { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import qs from "qs";
import { createHashHistory } from "history";
import AddButton from "../../AddButton";
import Brand from "../../Brand";
import Wrapper from "../../Wrapper";
import { movieActions } from "../../../store/actions";
import "../css/SearchPanel.css";

let searchValue = null;

const SearchPanel = ({ onSearch, onClearSearch }) => {

  const history = createHashHistory();
  const [searchString, setSearchString] = useState("");
  const [isMessageFrame, setIsMessageFrame] = useState(false);

  const onSetLocalHistorySearchValue = (value) => {
    localStorage.setItem("searchValue", value);
  };

  const searchHandler = useCallback(
    () => {
      const queryHistory = history.location.search;
      if (queryHistory) {
        const searchQuery = qs.parse(queryHistory, {
          ignoreQueryPrefix: true
        }).query;
        if (searchQuery) {
          setSearchString(searchQuery);
          searchValue = searchQuery;
          onSetLocalHistorySearchValue(searchQuery);
          onSearch();
        }
        return searchQuery;
      }
      return "";
    },
    [searchString]
  );

  useMemo(() => {
    if (searchString) {
      return searchString;
    }
    searchHandler();
    return "";
  }, [searchString, history.location.search]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter") {
        onSearch();
      }
    },
    [searchString]
  );

  const showMessage = () => {
    setIsMessageFrame(true);
  };

  const handleSearch = () => {
    return searchValue === "" || searchValue === null || searchValue === undefined ? (
      <button type="button" className="search-button" onClick={showMessage}>Search</button>
    ) : (
      <button type="button" className="search-button" onClick={onSearch}>Search</button>
    );
  };

  const onClearSearchField = (target) => {
    if (target.value === "") {
      onClearSearch();
      history.push(`/search?query=`);
    }
  };

  return (
    <>
      <Wrapper>
        <Brand />
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
                       history.push(`/search?query=${e.target.value}`);
                       searchValue = e.target.value;
                       setSearchString(e.target.value);
                       onSetLocalHistorySearchValue(e.target.value);
                       setIsMessageFrame(false);
                     }} />
              {handleSearch()}
              <AddButton />
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
  onClearSearch: PropTypes.func.isRequired
};

SearchPanel.defaultProps = {};

const mapStateToProps = (state) => ({
  movies: state.searchString
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: () => dispatch(movieActions.getMovieByTitle(searchValue)),
  onClearSearch: () => dispatch(movieActions.onClearSearch())
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
