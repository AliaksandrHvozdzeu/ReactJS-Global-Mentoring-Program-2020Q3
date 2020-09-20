import React from 'react';
import { Provider } from 'react-redux'
import { HomePage } from './containers';
import store from './store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

export default App;
