import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from '../../SearchPanel';
import MoviePreview from '../../MoviePreview';
import '../css/Header.css';
import { Provider } from 'react-redux';
import store from '../../../store';

export default function Header({ details, blur }) {

  return (
    <>
      <Provider store={store}>
        <header id="header" className={blur ? 'blurred' : ''}>
          {details && <MoviePreview details={details}/>}
          {!details && <SearchPanel/>}
        </header>
      </Provider>
    </>
  );

}

Header.propTypes = {
  details: PropTypes.string.isRequired,
  blur: PropTypes.string.isRequired,
};
