import React from 'react';
import PropTypes from 'prop-types';
import '../css/ResetButton.css';

const ResetButton = ({ onReset }) => {

  return (
    <>
      <button type="button"
              className="reset-button"
              onClick={onReset}>RESET
      </button>
    </>
  );

};

ResetButton.propTypes = {
  onReset: PropTypes.func.isRequired,
};

export default ResetButton;

