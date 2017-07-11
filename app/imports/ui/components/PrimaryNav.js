import React, { Component } from 'react';
import { object } from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import $ from 'jquery';
import Superfish from '../libraries/superfish.js';

class PrimaryNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isResized: false,
    };

    this.toggle = this.toggle.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }


  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);

    this.$navBody = $(this.navBody);
    this.$mainMenuWrapper = $(this.mainMenuWrapper);
    this.$siteHeader = $(this.siteHeader);

    if (!this.$navBody.hasClass('boxed')) {
      if (window.innerWidth > 992) {
        this.$mainMenuWrapper.sticky({ topSpacing: 0 });
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    this.$toggleMenu = $(this.toggleMenu);
    this.$mainMenuWrapper = $(this.mainMenuWrapper);
    if (this.$toggleMenu.hasClass('opened')) {
      this.$mainMenuWrapper.css('display', 'block');
    } else {
      this.$toggleMenu.css('display', 'none');
    }
    this.setState({ isResized: true });
  }

  toggle(e) {
    this.$toggleMenu = $(this.toggleMenu);
    this.$mainMenuWrapper = $(this.mainMenuWrapper);
    this.$toggleMenu.toggleClass('opened');
    this.$mainMenuWrapper.slideToggle(500);
    e.preventDefault();
  }

  render() {
    const { siteConfig } = this.props;
    const { SiteLogo } = siteConfig;
    return (
      <div className="body header-style4" ref={(elem) => { this.navBody = elem; }}>
        <header className="site-header" ref={(elem) => { this.siteHeader = elem; }}>
          <div className="topbar">
            <div className="container">
              <h1 className="logo"> <a href="index.html"><img src={SiteLogo} alt="Logo" /></a> </h1>
              <a
                href="#"
                className={`visible-sm visible-xs menu-toggle ${this.state.isResized}`}
                ref={(elem) => { this.toggleMenu = elem; }}
                onClick={this.toggle}
              >
                <i className="fa fa-bars" />
              </a>
              <div className="main-menu-wrapper" ref={(elem) => { this.mainMenuWrapper = elem; }}>
                <Superfish>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li><a href="events.html">Events</a>
                  </li>
                  <li><a href="sermons.html">Sermons</a>
                  </li>
                  <li><a href="gallery-2cols-pagination.html">Gallery</a>
                    <ul className="dropdown">
                      <li><a href="gallery-2cols-pagination.html">With Pagination</a>
                        <ul className="dropdown">
                          <li><a href="gallery-2cols-pagination.html">2 Columns</a></li>
                          <li><a href="gallery-3cols-pagination.html">3 Columns</a></li>
                          <li><a href="gallery-4cols-pagination.html">4 Columns</a></li>
                        </ul>
                      </li>
                      <li><a href="gallery-2cols-filter.html">With Filter</a>
                        <ul className="dropdown">
                          <li><a href="gallery-2cols-filter.html">2 Columns</a></li>
                          <li><a href="gallery-3cols-filter.html">3 Columns</a></li>
                          <li><a href="gallery-4cols-filter.html">4 Columns</a></li>
                        </ul>
                      </li>
                      <li><a href="gallery-masonry.html">Masonry Grid</a></li>
                    </ul>
                  </li>
                  <li><a href="blog-masonry.html">Blog</a>
                    <ul className="dropdown">
                      <li><a href="blog-masonry.html">Masonry Blog</a></li>
                      <li><a href="blog-full-width.html">Full Width Blog</a></li>
                      <li><a href="blog-timeline.html">Timeline Blog</a></li>
                      <li><a href="blog-medium-thumbnails.html">Medium Thumbnails</a></li>
                      <li><a href="blog-post.html">Single Blog Post</a></li>
                    </ul>
                  </li>
                  <li><a href="causes.html">Causes</a>
                    <ul className="dropdown">
                      <li><a href="causes.html">Causes List</a></li>
                      <li><a href="causes-grid.html">Causes Grid</a></li>
                      <li><a href="single-cause.html">Single Cause</a></li>
                    </ul>
                  </li>
                </Superfish>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

PrimaryNav.propTypes = {
  siteConfig: object.isRequired,
};

export default PrimaryNav;

/* export default function PrimaryNav({ siteConfig }) {
  const { SiteLogo, topInfoPhone, topInfoEmail, socialMedia } = siteConfig;

  const renderSocialButtons = () => (key, index) => {
    const media = socialMedia[key];
    if (media.isEnabled) {
      return (
        <li>
          <a target="_blank" href={media.url} key={index}>
            <i className={`fa ${media.icon}`} />
          </a>
        </li>
      );
    }
    return '';
  };
}*/
