import React from 'react';
import PropTypes from 'prop-types';
import '../css/Input.css';

export default function Input({ id, title, visibility, value, onChange, name, type }) {

  return (
    <>
      <label htmlFor={id} className={visibility}>
        {title}
        <input id={id}
               type={type}
               className="input"
               value={value}
               name={name}
               readOnly={false}
               onChange={onChange}
               required/>
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
  name: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  name: '',
}
