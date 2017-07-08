import { publishComposite } from 'meteor/reywood:publish-composite';
import SiteConfig from '../site-config.js';
import FrontPageTemplates from '../../front-page-templates/front-page-templates.js';
import FeaturedGroups from '../../featured-groups/featured-groups.js';
import FeaturedItems from '../../featured-items/featured-items.js';
import SliderImages from '../../slider-images/slider-images.js';


publishComposite('siteConfig', () => ({
  find() {
    return SiteConfig.find();
  },
  children: [{
    find({ staticFrontPageTemplate }) {
      return FrontPageTemplates.find(staticFrontPageTemplate);
    },
    children: [{
      find({ sliderImages }) {
        return SliderImages.find({ _id: { $in: sliderImages || [] } });
      },
    }, {
      find({ featuredGroups }) {
        return FeaturedGroups.find({ _id: { $in: featuredGroups || [] } });
      },
      children: [{
        find({ featuredItems }) {
          return FeaturedItems.find({ _id: { $in: featuredItems || [] } });
        },
      }],
    }],
  }],
}));
