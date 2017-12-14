import React from 'react';

export default React.createClass({
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