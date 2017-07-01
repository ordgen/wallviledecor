import React from 'react';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';

export default function PrimaryNav({ siteConfig }) {
  const { SiteLogo, topInfoPhone, topInfoEmail, socialMedia } = siteConfig;
  return (
    <div className="container magnis-header">	
      <div className="row">		
        <div className="col-md-12">
          <a href="/">
            <div className="site-logo site-logo-3 biglogo">
              <img src={SiteLogo} alt="" />
            </div>
          </a>
          <div className="header-contacts header-contacts-3 hidden-phone visible-tablet visible-desktop">
            {topInfoPhone &&
              <p>
                <i className="fa fa-phone"></i>
                <strong>{topInfoPhone}</strong>
              </p>
            }
            {topInfoEmail &&
              <p>
                <i className="fa fa-envelope"></i>
                <a href="mailto:">{topInfoEmail}</a>
              </p>
            }
          </div>
          <div className="header-sub-wrapper header-sub-wrapper-3">
            <div className="header-social-buttons header-social-buttons-3">
              {Object.keys(socialMedia).map((key, index) =>
                <a target="_blank" href={socialMedia[key].url} key={index}>
                  <i className={`fa ${socialMedia[key].icon}`}></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}