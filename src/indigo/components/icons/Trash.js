import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Trash = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 14 18"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M1 16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4H1v12zM14 1h-3.5l-1-1h-5l-1 1H0v2h14V1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

Trash.propTypes = {
  className: PropTypes.string
};

export default Trash;