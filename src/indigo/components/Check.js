import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

class Check extends React.Component {
  render() {
    return (
      <FontAwesomeIcon
        icon={this.props.isChecked ? faCheck : faXmark}
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
