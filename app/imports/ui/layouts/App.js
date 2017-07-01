import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import IndexPage from '../containers/IndexPage';

export default function App() {
  return (
    <Router>
      <div className="ordgen">
        <Switch>
          <Route exact path="/" component={IndexPage}/>
        </Switch>
      </div>
    </Router>
  );
};