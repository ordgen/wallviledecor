import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export default new SimpleSchema([
  {
    siteName: {
      type: String,
      label: 'Site Name',
      defaultValue: 'Ordgen'
    },

    SiteLogo: {
      type: String,
      label: 'Site Logo',
      defaultValue: 'https://s3.amazonaws.com/loystar/wallville-logo.jpeg'
    },

    topInfoPhone: {
      type: String,
      label: 'Site Phone Number',
      defaultValue: '+233244056101'
    },
    topInfoEmail: {
      type: String,
      label: 'Site Email',
      defaultValue: 'ordgenlabs@gmail.com'
    },
    socialMedia: {
      type: Object,
      label: 'Social Media',
    },
    "socialMedia.facebook": {
      type: Object,
      optional: true,
    },
    "socialMedia.facebook.url": {
      type: String,
      optional: true,
      defaultValue: ''
    },
    "socialMedia.facebook.icon": {
      type: String,
      optional: true,
      defaultValue: 'fa-facebook'
    },
    "socialMedia.twitter": {
      type: Object,
      optional: true,
    },
    "socialMedia.twitter.url": {
      type: String,
      optional: true,
      defaultValue: '',
    },
    "socialMedia.twitter.icon": {
      type: String,
      optional: true,
      defaultValue: 'fa-twitter',
    },
    "socialMedia.linkedin": {
      type: Object,
      optional: true,
    },
    "socialMedia.linkedin.url": {
      type: String,
      optional: true,
      defaultValue: '',
    },
    "socialMedia.linkedin.icon": {
      type: String,
      optional: true,
      defaultValue: 'fa-linkedin',
    },
    "socialMedia.google": {
      type: Object,
      optional: true,
    },
    "socialMedia.google.url": {
      type: String,
      optional: true,
      defaultValue: '',
    },
    "socialMedia.google.icon": {
      type: String,
      optional: true,
      defaultValue: 'fa-google-plus',
    },
    "socialMedia.youtube": {
      type: Object,
      optional: true,
    },
    "socialMedia.youtube.url": {
      type: String,
      optional: true,
      defaultValue: '',
    },
    "socialMedia.youtube.icon": {
      type: String,
      optional: true,
      defaultValue: 'fa-youtube',
    },
  },
]);
