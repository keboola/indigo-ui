import React from 'react';
import classNames from 'classnames';
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

    return (
      <i
        className={classNames('fa fa-circle job-status-circle', {
          [`job-status-circle-${statusColor}`]: !!statusColor,
        })}
      />
    );
  }
}

JobStatusCircle.propTypes = {
  status: PropTypes.oneOf([
    'success',
    'error',
    'warn',
    'warning',
    'processing',
    'cancelled',
    'waiting',
    'terminating',
    'terminated',
  ]).isRequired,
};

export default JobStatusCircle;
