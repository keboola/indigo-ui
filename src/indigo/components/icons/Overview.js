import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Overview = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 26 17"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M25.386 10.26s-4.957 6.046-11.36 6.66a8.217 8.217 0 0 1-1.01.068 8.341 8.341 0 0 1-.98-.063C5.596 16.353.596 10.26.596 10.26a2.92 2.92 0 0 1 0-3.538S6.097 0 12.992 0c6.894 0 12.4 6.722 12.4 6.722a2.92 2.92 0 0 1-.005 3.538zm-23.5-1.757a24.105 24.105 0 0 0 3.464 3.385 8.578 8.578 0 0 1 0-6.764 24.052 24.052 0 0 0-3.466 3.379h.002zm11.132-6.609a6.611 6.611 0 1 0 6.484 6.61 6.548 6.548 0 0 0-6.486-6.61h.002zm7.666 3.23a8.577 8.577 0 0 1-.008 6.777 23.874 23.874 0 0 0 3.472-3.4 24.15 24.15 0 0 0-3.466-3.377h.002zm-7.666 7.145a3.766 3.766 0 0 1 0-7.531c.266.001.53.032.79.09a2.36 2.36 0 0 0 .6 4.629 2.315 2.315 0 0 0 2.225-1.752c.057.263.086.531.087.8a3.735 3.735 0 0 1-3.704 3.764h.002z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

Overview.propTypes = {
  className: PropTypes.string
};

export default Overview;
