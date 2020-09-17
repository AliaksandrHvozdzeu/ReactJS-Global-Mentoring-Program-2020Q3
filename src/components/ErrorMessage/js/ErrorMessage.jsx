import React from 'react';
import PropTypes from 'prop-types';
import '../css/ErrorMessage.css';

export default function ErrorMessage({ error }) {

  return (
    <>
      {error !== '' && <p className="input-error">{error}</p>}
    </>
  );

}

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

ErrorMessage.defaultProps = {
  error: '',
};
