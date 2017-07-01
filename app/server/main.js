import { Meteor } from 'meteor/meteor';
import SiteConfig from '/imports/api/siteConfig/collection';

Meteor.startup(() => {
  if (!SiteConfig.findOne()) {
    SiteConfig.insert({});
  }
});
