import React, { useState } from 'react';
import { HomePage } from './views';
import './App.css';
import data from '../data-mock.json';

export default () => {

  const [state] = useState({
    results: data,
  });

  return (
    <>
      <HomePage preview={state.preview} results={state.results}/>
    </>
  );

};
