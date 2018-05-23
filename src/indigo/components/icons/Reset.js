import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Reset = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 18 20"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M15.364 4.416A8.977 8.977 0 0 1 18 10.779c0 2.482-1.01 4.74-2.636 6.364A8.978 8.978 0 0 1 9 19.78a8.98 8.98 0 0 1-6.364-2.637A8.976 8.976 0 0 1 0 10.78a8.978 8.978 0 0 1 2.636-6.364 8.987 8.987 0 0 1 4.248-2.383v2.514a6.588 6.588 0 0 0-4.466 6.234c0 1.821.735 3.46 1.928 4.654A6.558 6.558 0 0 0 9 17.362c1.822-.001 3.46-.735 4.654-1.928a6.555 6.555 0 0 0 1.928-4.654 6.587 6.587 0 0 0-4.466-6.233V2.032a8.987 8.987 0 0 1 4.248 2.383zM10 9.453H8V0h2v9.453z"
        fillRule="nonzero"
        fill="currentColor"
      />
    </svg>
  );
};

Reset.propTypes = {
  className: PropTypes.string
};

export default Reset;