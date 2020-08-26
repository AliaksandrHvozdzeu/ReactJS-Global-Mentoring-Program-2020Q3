import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Text = ({ id, title, value }) => (
  <label htmlFor={id}>
    {title}
    <p id={id}>{value}</p>
  </label>
);

Text.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Text.defaultProps = {
  value: ''
};

export default Text;
