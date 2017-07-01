import { Mongo } from 'meteor/mongo';
import schema from './schema';

const SiteConfig = new Mongo.Collection('siteConfig');
SiteConfig.attachSchema(schema);

export default SiteConfig;
