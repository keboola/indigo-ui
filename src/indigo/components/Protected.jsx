import React from 'react';
import PropTypes from 'prop-types';

export default React.createClass({
  propTypes: {
    children: PropTypes.any
  },

  getInitialState() {
    return {
      isProtected: true
    };
  },

  render() {
    return this.state.isProtected ? this.renderProtected() : this.renderRevealed();
  },

  renderProtected() {
    return (
      <span className="fa fa-fw fa-lock kbc-protected"
            title="Protected content, click to reveal"
            onClick={this.show} />
    );
  },

  renderRevealed() {
    return (
      <span>{this.props.children}</span>
    );
  },

  show() {
    this.setState({
      isProtected: false
    });
  }
});
