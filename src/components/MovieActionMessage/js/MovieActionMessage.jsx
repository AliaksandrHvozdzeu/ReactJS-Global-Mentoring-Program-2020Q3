import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../../CloseButton';
import '../css/MovieActionMessage.css';

import SuccessImage from '../../../../public/images/success.png';
import FailImage from '../../../../public/images/error.png';

export default function MovieActionMessage({ isOpen, title, message, imageType }) {

  const messageOverlay = document.getElementById('message-overlay');
  const messageBody = document.getElementById('movie-action-message');

  if (isOpen && messageOverlay && messageBody) {
    messageOverlay.style.visibility = 'visible';
    messageBody.style.visibility = 'visible';
  }

  const closeMessage = () => {
    messageOverlay.style.visibility = 'hidden';
    messageBody.style.visibility = 'hidden';
  };

  return (
    <>
      <div id="message-overlay" className="message-overlay">
        <div id="movie-action-message" className="movie-action-message">
          <section className="add-congratulation-movie">
            <CloseButton closeAction={closeMessage}/>
            {imageType === 'success' ?
              <img className="action-message-image" src={SuccessImage} alt="message success type"/> :
              <img className="action-message-image" src={FailImage} alt="message failure type"/>}
            <p className="add-congratulation-title">{title}</p>
            <p className="add-congratulation-message">
              {message}
            </p>
          </section>
        </div>
      </div>
    </>
  );

}

MovieActionMessage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
};
