import { Meteor } from 'meteor/meteor';
import SliderImages from '../slider-images.js';

// eslint-disable-next-line prefer-arrow-callback
Meteor.publish('sliderImages', function () {
  return SliderImages.find();
});
