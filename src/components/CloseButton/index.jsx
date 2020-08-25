import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const CloseButton = ({ closeAction }) => (
  <button type="button" className="close-button" onClick={closeAction}/>
);

CloseButton.propTypes = {
  closeAction: PropTypes.func.isRequired,
};

export default CloseButton;
