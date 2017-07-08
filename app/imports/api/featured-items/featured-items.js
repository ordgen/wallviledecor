import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { BaseSchema, OwnerSchema } from '../../shared/schemas.js';

const FeaturedItems = new Mongo.Collection('featuredItems');

// Deny all client-side updates
FeaturedItems.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

FeaturedItems.schema = new SimpleSchema([
  BaseSchema,
  OwnerSchema,
  {
    _id: {
      type: String,
      regEx: SimpleSchema.RegEx.Id,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    url: {
      type: String,
    },
  },
]);

FeaturedItems.attachSchema(FeaturedItems.schema);

export default FeaturedItems;
