import React, { PropTypes } from 'react';
import { Alert } from 'react-bootstrap';

export default React.createClass({
  propTypes: {
    title: PropTypes.string.isRequired,
    style: PropTypes.oneOf(['warning', 'danger']).isRequired,
    children: PropTypes.any.isRequired
  },

  render() {
    const { style, title, children } = this.props;
    return (
      <Alert className="alert-block" bsStyle={style}>
        <h3 className="alert-block-title">{title}</h3>
        <div className="alert-block-body">
          {children}
        </div>
      </Alert>
    );
  }
});
