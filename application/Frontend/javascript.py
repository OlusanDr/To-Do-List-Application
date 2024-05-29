import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import LandingPage from './LandingPage';
import './App.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/app" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);