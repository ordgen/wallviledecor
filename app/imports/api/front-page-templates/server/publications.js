import { Meteor } from 'meteor/meteor';
import FrontPageTemplates from '../front-page-templates.js';

// eslint-disable-next-line prefer-arrow-callback
Meteor.publish('frontPageTemplates', function () {
  return FrontPageTemplates.find();
});
