import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Run = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 11 14"
      className={classNames('icon', className)}
      {...props}
    >
      <path d="M0 0v14l11-7z" fill="currentColor" fillRule="evenodd" />
    </svg>
  );
};

Run.propTypes = {
  className: PropTypes.string
};

export default Run;
