import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import SiteConfig from '../../api/site-config/site-config.js';
import FrontPageTemplates from '../../api/front-page-templates/front-page-templates.js';
import AdminConfig from '../../shared/admin-config.js';
/*
  This defines all the collections, publications and methods that the application provides
  as an API to the client.
*/
import './register-api.js';

// user roles
const roles = ['default', 'admin'];

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
  if (Meteor.roles.find().count() === 0) {
    roles.map(role => Roles.createRole(role));
  }
  if (Meteor.users.find().count() === 0) {
    Meteor.call('Meteor.users.methods.createUser',
      {
        email: AdminConfig.email,
        password: AdminConfig.password,
        role: 'admin',
      },
    );
  }
});
