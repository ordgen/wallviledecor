import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PrimaryNav from '../components/PrimaryNav';

export default function IndexPage({ siteConfig }) {
  return (
    <PrimaryNav siteConfig={siteConfig} />
  );
};