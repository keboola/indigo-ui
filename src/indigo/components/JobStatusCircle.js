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
    return (
      <i
        className={classNames('fa fa-circle job-status-circle', {
          [`job-status-circle-${
            statusColorMap[this.props.status]
          }`]: Object.prototype.hasOwnProperty.call(statusColorMap, this.props.status),
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
