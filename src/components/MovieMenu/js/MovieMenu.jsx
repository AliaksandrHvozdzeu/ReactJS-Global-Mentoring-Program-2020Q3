import React, { useState } from "react";
import PropTypes from "prop-types";
import "../css/MovieMenu.css";
import MovieMenuClose from "./MovieMenuClose";
import MovieMenuOpen from "./MovieMenuOpen";

const MovieMenu = ({ editAction, deleteAction }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      {!isOpened && <MovieMenuClose action={setIsOpened} />}
      {isOpened && (<MovieMenuOpen action={setIsOpened}
                                   editMovie={editAction}
                                   deleteMovie={deleteAction} />)}
    </>
  );
};

MovieMenu.propTypes = {
  editAction: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired
};

export default MovieMenu;
