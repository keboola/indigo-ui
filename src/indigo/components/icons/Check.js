import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Check = ({ className, ...props }) => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      className={classNames('icon', className)}
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M-4-6h24v24H-4z" />
        <path
          d="M15.71.946a1.02 1.02 0 0 0-1.402 0l-8.41 8.086L1.691 4.99a1.02 1.02 0 0 0-1.402 0 .927.927 0 0 0 0 1.348l4.906 4.717a1.02 1.02 0 0 0 1.402 0l9.112-8.76a.927.927 0 0 0 0-1.348z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

Check.propTypes = {
  className: PropTypes.string
};

export default Check;
