import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from "prop-types";
import store from './store';
import NotFoundPage from './components/NotFoundPage';
import Home from './components/Home';
import './App.css';

const App = ({ Router, location, context }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <Switch>
        <Route exact path="/404" component={NotFoundPage}>
          <NotFoundPage message="Page not found"/>
        </Route>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  </Provider>
);

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
};

App.defaultProps = {
  location: null,
  context: null,
};

export default App;
