import React from 'react';
import PropTypes from 'prop-types';
import '../css/Input.css';
import ErrorMessage from '../../ErrorMessage';

export default function Input({ id, title, visibility, value, onChange, name, type, onBlur, error }) {

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
               onBlur={onBlur}/>
      </label>
      <ErrorMessage error={error}/>
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
  error: PropTypes.string,
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  name: '',
}
