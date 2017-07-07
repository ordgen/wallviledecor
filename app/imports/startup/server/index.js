import { Meteor } from 'meteor/meteor';
import SiteConfig from '../../api/site-config/site-config.js';
import FrontPageTemplates from '../../api/front-page-templates/front-page-templates.js';
/*
  This defines all the collections, publications and methods that the application provides
  as an API to the client.
*/
import './register-api.js';

Meteor.startup(() => {
  if (!FrontPageTemplates.findOne()) {
    Meteor.call('FrontPageTemplates.methods.insertTemplates',
      { names: ['classic', 'avanguard'] },
      (err, templateIds) => {
        if (!err) {
          if (!SiteConfig.findOne()) {
            templateIds.forEach((id) => {
              const template = FrontPageTemplates.findOne(id);
              if (template && template.name === 'classic') {
                SiteConfig.insert({ staticFrontPageTemplate: id });
              }
            });
          }
        }
      },
    );
  }
});
