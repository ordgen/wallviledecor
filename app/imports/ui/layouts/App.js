import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import Index from '../pages/Index';

export default function App() {
  return (
    <Router>
      <div className="wallvile">
        <Switch>
          <Route exact path="/" component={Index}/>
        </Switch>
      </div>
    </Router>
  );
};