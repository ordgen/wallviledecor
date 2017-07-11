import React, { Component } from 'react';
import { node } from 'prop-types';
import $ from 'jquery';

class Superfish extends Component {
  componentDidMount() {
    this.$navigation = $(this.navigation);
    this.$sfMenu = $(this.sfMenu);
    this.$sfMenu.superfish({
      delay: 200,
      animation: { opacity: 'show', height: 'show' },
      speed: 'fast',
      cssArrows: false,
      disableHI: true,
    });

    this.$navigation.find('ul li').mouseover(function () {
      const theWidth = $(this).find('a').width();
      const childWidth = $(this).find('ul').width();
      const width = parseInt((childWidth - theWidth) / 2, 10);
      $(this).find('ul').css('left', -width);
    });
  }

  render() {
    return (
      <nav className="navigation" ref={(elem) => { this.navigation = elem; }}>
        <ul className="sf-menu" ref={(elem) => { this.sfMenu = elem; }}>
          {this.props.children}
        </ul>
      </nav>
    );
  }
}

Superfish.propTypes = {
  children: node.isRequired,
};

export default Superfish;
