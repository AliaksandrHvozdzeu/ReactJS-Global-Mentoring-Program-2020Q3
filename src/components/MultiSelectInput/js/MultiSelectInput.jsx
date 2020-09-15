import React from 'react';
import PropTypes from 'prop-types';
import MultiSelect from 'react-multi-select-component';
import Constants from '../../../constants';
import '../css/MultiSelectInput.css';

const ArrowRenderer = ({ expanded }) => (expanded ?
  <img className="arrow" src={Constants.ARROWS[0]} alt="arrow_up"/> :
  <img className="arrow" src={Constants.ARROWS[1]} alt="arrow_down"/>);

const buildValues = (elems) => elems.map((e) => ({ label: e, value: e }));

export default function MultiSelectInput({ title, options, preselected, onAction }) {

  const selected = buildValues(preselected) || [];

  return (
    <>
      <label htmlFor="genres" className="genres" id="malty">
        {title}
        <MultiSelect
          id="genres"
          ArrowRenderer={ArrowRenderer}
          options={options}
          value={selected}
          onChange={onAction}
          hasSelectAll={false}
          labelledBy="malty"/>
      </label>
    </>
  );

}

ArrowRenderer.propTypes = {
  expanded: PropTypes.bool.isRequired,
};

MultiSelectInput.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  preselected: PropTypes.arrayOf(PropTypes.string),
  onAction: PropTypes.func.isRequired,
};

MultiSelectInput.defaultProps = {
  preselected: [],
};
