import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';

const statusColorMap = {
  success: 'success',
  error: 'danger',
  warn: 'danger',
  warning: 'danger',
  processing: 'warning',
  waiting: 'default',
  cancelled: 'canceled',
  terminating: 'canceled',
  terminated: 'canceled',
};

class JobStatusCircle extends React.Component {
  render() {
    const statusColor = statusColorMap[this.props.status] || 'default';

    return (
      <FontAwesomeIcon
        icon={faCircle}
        className={classnames(`job-status-circle-${statusColor}`, this.props.className)}
      />
    );
  }
}

JobStatusCircle.propTypes = {
  status: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default JobStatusCircle;
