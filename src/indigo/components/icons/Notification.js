import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Notification = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 15 16"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M12.413 9.022a11.516 11.516 0 0 1-.874-4.451 3.162 3.162 0 0 0-.866-2.34 3.89 3.89 0 0 0-2.38-1.044.8.8 0 0 0 .072-.33.821.821 0 0 0-.253-.607.876.876 0 0 0-1.225 0 .821.821 0 0 0-.253.607.8.8 0 0 0 .072.33 3.89 3.89 0 0 0-2.38 1.045 3.161 3.161 0 0 0-.865 2.339 11.517 11.517 0 0 1-.875 4.45A9.1 9.1 0 0 1 0 12.576a1.09 1.09 0 0 0 .343.8c.212.22.506.342.811.339h4.039c-.01.61.236 1.195.676 1.617a2.323 2.323 0 0 0 3.263 0c.438-.42.682-1.003.675-1.61h4.039c.306.004.6-.119.812-.338.22-.208.344-.498.342-.8a9.117 9.117 0 0 1-2.587-3.55v-.011z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

Notification.propTypes = {
  className: PropTypes.string
};

export default Notification;
