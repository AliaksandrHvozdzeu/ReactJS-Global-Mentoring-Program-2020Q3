import React from 'react';
import PropTypes from 'prop-types';

export default function Calendar({ id, title, value, onChange }) {

  return (
    <>
      <label htmlFor={id}>
        {title}
        <input className="input" id={id} type="date" value={value} onChange={onChange}/>
      </label>
    </>
  );

}

Calendar.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
