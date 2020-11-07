import React from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { Provider } from "react-redux";
import MovieDetails from "../../MovieDetails";
import Brand from "../../Brand";
import "../css/MoviePreview.css";

import store from "../../../store";
import SearchPanel from "../../SearchPanel";

export default function MoviePreview({ details }) {

  const onPushHistoryState = () => {
    window.history.pushState(null, null, `/`);
  };

  const onClosePreview = () => {
    const header = document.getElementById("header");
    header.className = null;
    onPushHistoryState();
    render(<Provider store={store}><SearchPanel /></Provider>, header);
    window.history.pushState(null, null, `#/search?query=${localStorage.getItem("searchValue")}`);
  };

  return (
    <>
      <div className="preview-wrapper">
        <Brand />
        <div className="movie-preview unselectable">
          <MovieDetails details={details} />
        </div>
        <button className="close-preview-button"
                type="button"
                onClick={onClosePreview}
                onKeyDown={onClosePreview}>
          <img src="../images/search_42.png"
               className="close-preview"
               alt="close preview" />
        </button>
      </div>
    </>
  );

}

MoviePreview.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string
  }).isRequired
};
