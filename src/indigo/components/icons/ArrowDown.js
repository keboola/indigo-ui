import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ArrowDown = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 10 6"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M9.824 1.39L5.808 5.439v.006l-.406.407a.573.573 0 0 1-.812 0l-.406-.407v-.006L.168 1.39a.578.578 0 0 1 0-.815L.574.169a.573.573 0 0 1 .812 0L4.992 3.81 8.606.169a.573.573 0 0 1 .812 0l.406.407a.578.578 0 0 1 0 .815z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

ArrowDown.propTypes = {
  className: PropTypes.string
};

export default ArrowDown;