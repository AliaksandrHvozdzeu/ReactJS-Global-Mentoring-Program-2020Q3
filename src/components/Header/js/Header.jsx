import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import SearchPanel from '../../SearchPanel';
// eslint-disable-next-line import/no-cycle
import MoviePreview from '../../MoviePreview';
import store from '../../../store';
import '../css/Header.css';

export default function Header({ details, blur }) {

  const buildHeader = () => {
    return details ? <MoviePreview details={details}/> : <SearchPanel/>;
  };

  return (
    <>
      <Provider store={store}>
        <header id="header" className={blur ? 'blurred' : ''}>
          {buildHeader()}
        </header>
      </Provider>
    </>
  );

}

Header.propTypes = {
  details: PropTypes.string.isRequired,
  blur: PropTypes.bool.isRequired,
};
