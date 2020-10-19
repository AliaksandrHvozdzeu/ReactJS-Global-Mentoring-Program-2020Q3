import React from 'react';
import PropTypes from "prop-types";

const MovieMenuClose = ({ action }) => (
  <button type="button" className="movie-menu movie-menu-closed" onClick={() => action(true)}>
    <div className="movie-menu-button"/>
  </button>
);

MovieMenuClose.propTypes = {
  action: PropTypes.func.isRequired
};

export default MovieMenuClose;
