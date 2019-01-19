import React from 'react';
import PropTypes from 'prop-types';

const statusColorMap = {
  success: 'success',
  error: 'danger',
  warn: 'danger',
  warning: 'danger',
  processing: 'warning',
  cancelled: 'default',
  waiting: 'default',
  terminating: 'default',
  terminated: 'default',
};

class JobStatusCircle extends React.Component {
  render() {
    const statusColor = statusColorMap[this.props.status] || 'default';
    return <i className={`fa fa-circle job-status-circle-${statusColor}`} />;
  }
}

JobStatusCircle.propTypes = {
  status: PropTypes.string,
};

export default JobStatusCircle;
