import { Meteor } from 'meteor/meteor';
import FeaturedItems from '../featured-items.js';

// eslint-disable-next-line prefer-arrow-callback
Meteor.publish('featuredItems', function () {
  return FeaturedItems.find();
});
