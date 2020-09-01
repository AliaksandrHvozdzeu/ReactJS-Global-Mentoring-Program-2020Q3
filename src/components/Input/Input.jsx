import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function Input({ id, title, visibility, value, onChange }) {

  return (
    <>
      <label htmlFor={id} className={visibility}>
        {title}
        <input type="text" id={id} className="input" value={value} onChange={onChange}/>
      </label>
    </>
  );

}

Input.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  visibility: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};
