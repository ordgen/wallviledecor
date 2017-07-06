import { Meteor } from 'meteor/meteor';
import SiteConfig from '/imports/api/site-config/site-config.js';

/*
	This defines all the collections, publications and methods that the application provides
	as an API to the client.
*/
import './register-api.js';

Meteor.startup(() => {
  if (!SiteConfig.findOne()) {
    SiteConfig.insert({});
  }
});