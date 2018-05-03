import React, { PropTypes } from 'react';
import { Alert } from 'react-bootstrap';

export default React.createClass({
  propTypes: {
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['warning', 'danger']).isRequired,
    children: PropTypes.any.isRequired
  },

  render() {
    const { type, title, children } = this.props;
    return (
      <Alert className="alert-block" bsStyle={type}>
        <h3 className="alert-block-title">{title}</h3>
        <div className="alert-block-body">
          {children}
        </div>
      </Alert>
    );
  }
});
