import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const statusColorMap = {
  success: 'success',
  error: 'error',
  warn: 'error',
  warning: 'error',
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
          [`job-status-circle-${statusColorMap[this.props.status]}`]: true,
        })}
      />
    );
  }
}

JobStatusCircle.propTypes = {
  status: PropTypes.string,
};

export default JobStatusCircle;
