import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import NotFoundPage from './components/NotFoundPage';
import Home from './components/Home';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/404" component={NotFoundPage}>
          <NotFoundPage message="Page not found"/>
        </Route>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  </Provider>
);


export default App;
