import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const statusColorMap = {
  success: 'success',
  danger: 'danger',
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
          [`job-status-circle-${statusColorMap[this.props.status]}`]: !!this.props.status,
        })}
      />
    );
  }
}

JobStatusCircle.propTypes = {
  status: PropTypes.string,
};

export default JobStatusCircle;
