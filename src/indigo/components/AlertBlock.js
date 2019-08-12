import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

class AlertBlock extends React.Component {
  render() {
    const { type, title, children } = this.props;
    return (
      <Alert className="alert-block" bsStyle={type}>
        <h3 className="alert-block-title">{title}</h3>
        <div className="alert-block-body">
          <i className="fa fa-exclamation-triangle" />
          {children}
        </div>
      </Alert>
    );
  }
}

AlertBlock.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['warning', 'danger']).isRequired,
  children: PropTypes.any.isRequired,
};

export default AlertBlock;
