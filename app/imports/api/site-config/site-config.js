import { Mongo } from 'meteor/mongo';
import schema from './schema';

const SiteConfig = new Mongo.Collection('siteConfig');
SiteConfig.attachSchema(schema);

// Deny all client-side updates
SiteConfig.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

export default SiteConfig;
