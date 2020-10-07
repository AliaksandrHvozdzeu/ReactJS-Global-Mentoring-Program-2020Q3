import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../../ErrorMessage';

export default function Calendar({ id, title, value, onChange, name, type, onBlur, error }) {

  return (
    <>
      <label htmlFor={id}>
        {title}
        <input id={id}
               className="input"
               type={type}
               name={name}
               value={value}
               onChange={onChange}
               onBlur={onBlur}/>
      </label>
      <ErrorMessage error={error}/>
    </>
  );

}

Calendar.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
};

Calendar.defaultProps = {
  value: '',
  name: '',
}
