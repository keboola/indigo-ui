import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SwitchOn = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 20"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M30 10c0-4.42-3.579-8-7.993-8H9.993C5.585 2 2 5.585 2 10c0 4.42 3.579 8 7.993 8h12.014C26.415 18 30 14.415 30 10zm2 0c0 5.523-4.483 10-9.993 10H9.993C4.474 20 0 15.524 0 10 0 4.477 4.483 0 9.993 0h12.014C27.526 0 32 4.476 32 10zM22 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"
        fillRule="nonzero"
        fill="currentColor"
      />
    </svg>
  );
};

SwitchOn.propTypes = {
  className: PropTypes.string
};

export default SwitchOn;
