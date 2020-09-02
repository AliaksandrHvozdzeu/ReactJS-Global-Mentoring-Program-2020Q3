import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';


const MenuClosed = ({ action }) => (
  <button type="button" className="movie-menu movie-menu-closed" onClick={() => action(true)}>
    <div className="movie-menu-button"/>
  </button>
);

const MenuOpened = ({ action, editMovie, deleteMovie }) => (
  <div className="movie-menu movie-menu-opened">
    <button className="movie-menu-action" type="button" onClick={editMovie}>Edit</button>
    <button className="movie-menu-action" type="button" onClick={deleteMovie}>Delete</button>
    <button className="movie-menu-close" id="movie-menu-close-button" type="button" onClick={() => action(false)}>Close</button>
  </div>
);

MenuClosed.propTypes = {
  action: PropTypes.func.isRequired
};

MenuOpened.propTypes = {
  action: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired
};

const MovieMenu = ({ editAction, deleteAction }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      {!isOpened && <MenuClosed action={setIsOpened}/>}
      {isOpened && (<MenuOpened action={setIsOpened} editMovie={editAction} deleteMovie={deleteAction}/>)}
    </>
  );
};

MovieMenu.propTypes = {
  editAction: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired
};

export default MovieMenu;
