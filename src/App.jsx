import React, { useState } from 'react';
import pageIds from './model/page';
import { HomePage } from './views';
import './App.css';
import data from '../data-mock.json';

export default () => {

  const [state] = useState({
    page: pageIds.home,
    preview: null,
    results: data
  });

  return (
    <>
      {(state.page === pageIds.home || state.page === pageIds.view) && (
        <HomePage preview={state.preview} results={state.results}/>
      )}
    </>
  );

};
