import React, { useState } from 'react';
import { HomePage } from './containers';
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
