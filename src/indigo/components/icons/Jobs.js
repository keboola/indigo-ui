import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Jobs = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M22 24H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2zm0-21a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3zm-5 9l-9 5V7l9 5z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

Jobs.propTypes = {
  className: PropTypes.string
};

export default Jobs;