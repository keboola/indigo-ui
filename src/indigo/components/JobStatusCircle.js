import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

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
    return <FontAwesomeIcon icon={faCircle} className={`job-status-circle-${statusColor}`} />;
  }
}

JobStatusCircle.propTypes = {
  status: PropTypes.string,
};

export default JobStatusCircle;
