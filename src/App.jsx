import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import store from './store';
import NotFoundPage from './components/NotFoundPage';
import BackButton from './components/BackButton';
import Home from './components/Home';
import './App.css';

const BackLink = (
  <Link to="/">
    <BackButton/>
  </Link>
);

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/404" component={NotFoundPage}>
          <NotFoundPage BackLink={BackLink}/>
        </Route>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  </Provider>
);


export default App;
