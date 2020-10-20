import React from 'react';
import PropTypes from 'prop-types';
import '../css/Wrapper.css';

const Wrapper = ({ children }) => {
  return <div className="wrapper unselectable">{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Wrapper;
