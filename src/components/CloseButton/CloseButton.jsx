import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function CloseButton({ closeAction }) {

  return (
    <>
      <button type="button" aria-label="close" className="close-button" onClick={closeAction}/>
    </>
  );

}
CloseButton.propTypes = {
  closeAction: PropTypes.func.isRequired,
};
