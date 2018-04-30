import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

import Icon from '../../indigo/components/Icon';

class AlertBlock extends React.Component {
  render() {
    const { type, title, children } = this.props;
    return (
      <Alert className="alert-block" bsStyle={type}>
        <h3 className="alert-block-title">{title}</h3>
        <div className="alert-block-body">
          <Icon iconClass={type} className="alert-block-icon"/>
          {children}
        </div>
      </Alert>
    );
  }
}

AlertBlock.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['warning', 'danger']).isRequired,
  children: PropTypes.any.isRequired
};

export default AlertBlock;
