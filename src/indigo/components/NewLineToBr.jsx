import React, {PropTypes, DOM} from 'react';
import {List} from 'immutable';

export default React.createClass({
  propTypes: {
    text: PropTypes.string.isRequired
  },

  render() {
    return (
      <span>{this.lines()}</span>
    );
  },

  lines() {
    return List(this.props.text.split("\n"))
      .map((value, index) => {
        return (
          <span key={index}>{value}</span>
        );
      })
      .interpose(DOM.br());
  }

});
