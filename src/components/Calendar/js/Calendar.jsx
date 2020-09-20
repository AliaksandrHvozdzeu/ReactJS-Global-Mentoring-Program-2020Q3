import React from 'react';
import PropTypes from 'prop-types';

export default function Calendar({ id, title, value, onChange, name, type }) {

  return (
    <>
      <label htmlFor={id}>
        {title}
        <input id={id}
               className="input"
               type={type}
               name={name}
               value={value}
               onChange={onChange}/>
      </label>
    </>
  );

}

Calendar.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
};

Calendar.defaultProps = {
  value: '',
  name: '',
}
