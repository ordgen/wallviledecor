import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const FrontPageTemplates = new Mongo.Collection('frontPageTemplates');

// Deny all client-side updates
FrontPageTemplates.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

FrontPageTemplates.schema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  name: {
    type: String,
  },
  sections: {
    type: Object,
  },
  'sections.sliderImages': {
    type: [String],
    label: 'Slider',
    regEx: SimpleSchema.RegEx.Id,
  },
});

FrontPageTemplates.attachSchema(FrontPageTemplates.schema);

export default FrontPageTemplates;
