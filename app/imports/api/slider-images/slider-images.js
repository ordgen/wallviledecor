import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const SliderImages = new Mongo.Collection('sliderImages');

// Deny all client-side updates
SliderImages.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

export default SliderImages;

