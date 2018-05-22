import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Orchestration = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 30 23"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M26.002 11a4 4 0 0 1-4-4c0-.018.005-.035.005-.053l-3.549-.968a3.977 3.977 0 0 1-6.74.3l-3.928 2.5a3.99 3.99 0 1 1-1.067-1.691l4.313-2.744c-.01-.119-.034-.228-.034-.344a4 4 0 1 1 8 0c0 .018-.005.035-.005.053l3.55.968A3.993 3.993 0 1 1 26.001 11zm-22-3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm11-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm11 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-16 5l1.638-1.042a5.953 5.953 0 0 0 7.407-.55l1.262.344a5.83 5.83 0 0 0 6.693 4.148V21a2 2 0 0 1-2 2h-20a2 2 0 0 1-2-2v-5.1a5.909 5.909 0 0 0 7-5.9z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

Orchestration.propTypes = {
  className: PropTypes.string
};

export default Orchestration;
