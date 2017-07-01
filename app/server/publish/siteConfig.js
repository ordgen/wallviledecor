import { Meteor } from 'meteor/meteor';
import SiteConfig from '/imports/api/siteConfig/collection';

Meteor.publish('siteConfig', function() {
  return SiteConfig.find();
});