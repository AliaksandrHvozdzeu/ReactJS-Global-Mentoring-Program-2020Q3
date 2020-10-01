import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../../ErrorBoundary';
import '../css/Header.css';

const Header = ({ blur, onBuildHeader }) => {

  return (
    <ErrorBoundary>
      <header id="header" className={blur ? 'blurred' : ''}>
        {onBuildHeader()}
      </header>
    </ErrorBoundary>
  );

};

Header.propTypes = {
  blur: PropTypes.bool.isRequired,
  onBuildHeader: PropTypes.func.isRequired,
};


export default Header;
