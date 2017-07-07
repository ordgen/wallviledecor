import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import FrontPageTemplates from '../front-page-templates.js';

export const insertTemplates = new ValidatedMethod({
  name: 'FrontPageTemplates.methods.insertTemplates',
  validate: new SimpleSchema({
    names: {
      type: [String],
    },
  }).validator(),

  async run({ names }) {
    const templateIds = [];
    names.forEach(name => templateIds.push(FrontPageTemplates.insert({ name })));
    return templateIds;
  },
});
