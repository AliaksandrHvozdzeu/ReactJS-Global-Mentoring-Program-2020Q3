import React, { useEffect } from 'react';
import '../css/MovieLoadMessage.css';

const MovieLoadMessage = () => {

  useEffect(() => {
    const container = document.body;
    container.style.overflow = 'hidden';
    return () => {container.style.overflow = 'auto';};
  }, []);

  return (
    <>
      <div className="modal-window-overlay-message"/>
      <div className="modal-window">
        <div className="modal-window-loader">Loading... Please wait!</div>
      </div>
    </>
  );

};

export default MovieLoadMessage;
