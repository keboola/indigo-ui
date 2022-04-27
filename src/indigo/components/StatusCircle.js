import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';

const statusMap = {
  success: { status: 'success', icon: faCheckCircle },
  error: { status: 'danger', icon: faExclamationCircle },
  warn: { status: 'danger', icon: faTimesCircle },
  warning: { status: 'danger', icon: faTimesCircle },
  processing: { status: 'warning', icon: faCircle },
  waiting: { status: 'default', icon: faCircle },
  cancelled: { status: 'default', icon: faExclamationCircle },
  terminating: { status: 'default', icon: faExclamationCircle },
  terminated: { status: 'default', icon: faExclamationCircle },
};

const StatusCircle = (props) => {
  const { status = 'default', icon = faCircle } = statusMap[props.status] ?? {};
  return (
    <FontAwesomeIcon
      icon={icon}
      className={classnames(`status-circle-${status}`, props.className)}
    />
  );
};

StatusCircle.propTypes = {
  status: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default StatusCircle;
