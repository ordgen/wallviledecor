import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const SliderImages = new Mongo.Collection('sliderImages');

// Deny all client-side updates
SliderImages.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

SliderImages.schema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  imageUrl: {
    type: String,
  },
  imageDescription: {
    type: String,
  },
  callToAction: {
    type: Object,
    optional: true,
  },
  'callToAction.label': {
    type: String,
  },
  'callToAction.url': {
    type: String,
  },
});

SliderImages.attachSchema(SliderImages.schema);

export default SliderImages;
