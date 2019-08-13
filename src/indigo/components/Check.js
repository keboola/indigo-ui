import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

class Check extends React.Component {
  render() {
    return <FontAwesomeIcon icon={this.props.isChecked ? faCheck : faTimes} />;
  }
}

Check.propTypes = {
  isChecked: PropTypes.bool.isRequired,
};

export default Check;
