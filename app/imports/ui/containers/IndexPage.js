import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import SiteConfig from '/imports/api/site-config/site-config.js';
import IndexPage from '../pages/IndexPage';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('siteConfig');
  
  if (subscription.ready()) {
    const siteConfig = SiteConfig.findOne();
    console.log(siteConfig)
    onData(null, { siteConfig, params });
  }
};

export default composeWithTracker(composer)(IndexPage);