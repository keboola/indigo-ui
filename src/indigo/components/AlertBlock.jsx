import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

import IconWarning from './icons/Warning';
import IconDanger from './icons/Danger';

class AlertBlock extends React.Component {
  render() {
    const { type, title, children } = this.props;
    return (
      <Alert className="alert-block" bsStyle={type}>
        <h3 className="alert-block-title">{title}</h3>
        <div className="alert-block-body">
          {this.renderIcon()}
          {children}
        </div>
      </Alert>
    );
  }

  renderIcon() {
    if (this.props.type === 'warning') {
      return <IconWarning className="alert-block-background" />
    }
    return <IconDanger className="alert-block-background" />
  }
}

AlertBlock.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['warning', 'danger']).isRequired,
  children: PropTypes.any.isRequired
};

export default AlertBlock;
