import { Meteor } from 'meteor/meteor';
import FeaturedGroups from '../featured-groups.js';

// eslint-disable-next-line prefer-arrow-callback
Meteor.publish('featuredGroups', function () {
  return FeaturedGroups.find();
});
