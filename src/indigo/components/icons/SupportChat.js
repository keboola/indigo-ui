import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SupportChat = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 16 16"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M5.385 16a.709.709 0 0 1-.247-.05.7.7 0 0 1-.414-.64v-2.87A6.024 6.024 0 0 1 .007 6.26C.007 2.81 2.49 0 5.542 0h4.933c3.052 0 5.535 2.81 5.535 6.26 0 3.45-2.483 6.25-5.535 6.25H8.868l-3 3.27a.65.65 0 0 1-.483.22z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

SupportChat.propTypes = {
  className: PropTypes.string
};

export default SupportChat;
