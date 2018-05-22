import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Minus = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 16 2"
      className={classNames('icon', className)}
      {...props}
    >
      <path d="M0 0h16v2H0z" fill="currentColor" fillRule="evenodd" />
    </svg>
  );
};

Minus.propTypes = {
  className: PropTypes.string
};

export default Minus;
