import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Input = ({ id, title, visibility, value, onChange }) => (
  <label htmlFor={id} className={visibility}>
    {title}
    <input type="text" id={id} className="input" value={value} onChange={onChange}/>
  </label>
);

Input.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  visibility: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired
};

export default Input;
