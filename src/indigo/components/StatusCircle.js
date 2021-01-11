import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';

const statusColorMap = {
  success: 'success',
  error: 'danger',
  warn: 'danger',
  warning: 'danger',
  processing: 'warning',
  waiting: 'default',
  cancelled: 'canceled',
  terminating: 'canceled',
  terminated: 'canceled'
};

class StatusCircle extends React.Component {
  render() {
    if (this.props.status === 'success') {
      return this.renderStatusIcon('success', faCheckCircle);
    }

    if (['error', 'warn', 'warning'].includes(this.props.status)) {
      return this.renderStatusIcon('danger', faTimesCircle);
    }

    return this.renderStatusIcon(statusColorMap[this.props.status]);
  }

  renderStatusIcon(status = 'default', icon = faCircle) {
    return (
      <FontAwesomeIcon
        icon={icon}
        className={classnames(`status-circle-${status}`, this.props.className)}
      />
    );
  }
}

StatusCircle.propTypes = {
  status: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default StatusCircle;
