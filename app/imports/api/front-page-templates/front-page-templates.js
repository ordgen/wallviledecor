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
    optional: true,
  },
  'sections.sliderImages': {
    type: [String],
    label: 'Slider',
    regEx: SimpleSchema.RegEx.Id,
    optional: true,
  },
  'sections.callToActionBar': {
    type: Object,
    optional: true,
  },
  'sections.callToActionBar.description': {
    type: String,
    optional: true,
  },
  'sections.callToActionBar.buttonLabel': {
    type: String,
    optional: true,
  },
  'sections.callToActionBar.buttonUrl': {
    type: String,
    optional: true,
  },
  'sections.callToActionBar.isEnabled': {
    type: Boolean,
    optional: true,
  },
  'sections.about': {
    type: Object,
    optional: true,
  },
  'sections.about.text': {
    type: String,
    optional: true,
  },
  'sections.about.image': {
    type: String,
    optional: true,
  },
  'sections.about.isEnabled': {
    type: Boolean,
    optional: true,
  },
  'sections.featuredGroups': {
    type: [String],
    regEx: SimpleSchema.RegEx.Id,
    optional: true,
    label: 'Featured Sections',
  },
});

FrontPageTemplates.attachSchema(FrontPageTemplates.schema);

export default FrontPageTemplates;
