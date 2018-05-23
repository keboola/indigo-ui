import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Times = ({ className, ...props }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className={classNames('icon', className)}
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M-7-7h24v24H-7z" />
        <path
          fill="currentColor"
          d="M10 1.007L8.993 0 5 3.993 1.007 0 0 1.007 3.993 5 0 8.993 1.007 10 5 6.007 8.993 10 10 8.993 6.007 5z"
        />
      </g>
    </svg>
  );
};

Times.propTypes = {
  className: PropTypes.string
};

export default Times;