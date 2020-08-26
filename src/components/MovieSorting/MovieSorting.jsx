import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const MovieSorting = ({title, options, onAction, selectedOption}) => {
  const [selected, setSelected] = useState(selectedOption || options[0]);
  const onChange = (event) => {
    const { value } = event.target;
    onAction(value);
    setSelected(value);
  };
  return (
    <label htmlFor="date-filter" className="sorting-title">
      {title}
      <select id="date-filter" className="sorting-select" onChange={onChange} value={selected}>
        {options.map((option) => (
          <option key={option} className="sorting-item" value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

MovieSorting.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAction: PropTypes.func.isRequired,
  selectedOption: PropTypes.string,
};

MovieSorting.defaultProps = {
  selectedOption: null
};

export default MovieSorting;
