import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

class Check extends React.Component {
  render() {
    return (
      <FontAwesomeIcon
        icon={this.props.isChecked ? faCheck : faTimes}
        fixedWidth={this.props.fixedWidth}
        className={classnames(this.props.className)}
      />
    );
  }
}

Check.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  fixedWidth: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Check.defaultProps = {
  fixedWidth: false,
};

export default Check;
