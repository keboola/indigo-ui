import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';

class AlertBlock extends React.Component {
  render() {
    return (
      <Alert className="alert-block alert-no-icon" bsStyle={this.props.type}>
        <h3 className="alert-block-title">{this.props.title}</h3>
        <div className="alert-block-body">
          <FontAwesomeIcon icon={faExclamationTriangle} />
          {this.props.children}
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
