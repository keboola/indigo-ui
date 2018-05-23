import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Plus = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 18 18"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M18 8h-8V0H8v8H0v2h8v8h2v-8h8z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

Plus.propTypes = {
  className: PropTypes.string
};

export default Plus;