import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../CloseButton';
import './style.css';
import Modal from 'react-modal';

import SuccessImage from '../../../public/images/success.png';
import FailImage from '../../../public/images/fail.png';

export default function MovieActionMessage({ isOpen, closeAction, title, message, imageType }) {

  const messageType = () => {
    return imageType === 'success' ? <img className="action-message-image" src={SuccessImage} alt="message success type"/> :
      <img className="action-message-image" src={FailImage} alt="message failure type"/>;
  };

  return (
    <>
      <Modal isOpen={isOpen}
             className="add-congratulation-movie"
             overlayClassName="congratulation-modal-overlay"
             onRequestClose={closeAction}
             shouldCloseOnOverlayClick={false}>
        <div>
          <CloseButton closeAction={closeAction}/>
          <section className="add-congratulation-movie">
            {messageType()}
            <p className="add-congratulation-title">{title}</p>
            <p className="add-congratulation-message">
              {message}
            </p>
          </section>
        </div>
      </Modal>
    </>
  );

}

MovieActionMessage.propTypes = {
  isOpen: PropTypes.func.isRequired,
  closeAction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
};
