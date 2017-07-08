import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { BaseSchema, OwnerSchema } from '../../shared/schemas.js';

const FeaturedGroups = new Mongo.Collection('featuredGroups');

// Deny all client-side updates
FeaturedGroups.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

FeaturedGroups.schema = new SimpleSchema([
  BaseSchema,
  OwnerSchema,
  {
    _id: {
      type: String,
      regEx: SimpleSchema.RegEx.Id,
    },
    name: {
      type: String,
      label: 'Name (optional)',
    },
    featuredItems: {
      type: [String],
      label: 'Item',
      regEx: SimpleSchema.RegEx.Id,
      optional: true,
    },
    featuredItemTemplate: {
      type: String,
      allowedValues: ['minimal', 'detailed'],
      defaultValue: 'minimal',
    },
  },
]);

FeaturedGroups.attachSchema(FeaturedGroups.schema);

export default FeaturedGroups;
