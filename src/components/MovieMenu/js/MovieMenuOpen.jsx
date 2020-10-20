import React from 'react';
import PropTypes from "prop-types";

const MovieMenuOpen = ({ action, editMovie, deleteMovie }) => (
  <div className="movie-menu movie-menu-opened">
    <button className="movie-menu-action" type="button" onClick={editMovie}>Edit</button>
    <button className="movie-menu-action" type="button" onClick={deleteMovie}>Delete</button>
    <button className="movie-menu-close" id="movie-menu-close-button" type="button"
            onClick={() => action(false)}>Close
    </button>
  </div>
);

MovieMenuOpen.propTypes = {
  action: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired
};

export default MovieMenuOpen;
