import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SqlDep = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M23.002 18.002h-1v-6a.945.945 0 0 0-1-1h-8v-5h1a.945.945 0 0 0 1-1v-4a.945.945 0 0 0-1-1h-4a.945.945 0 0 0-1 1v4a.945.945 0 0 0 1 1h1v5h-8a.945.945 0 0 0-1 1v6h-1a.945.945 0 0 0-1 1v4a.945.945 0 0 0 1 1h4a.945.945 0 0 0 1-1v-4a.945.945 0 0 0-1-1h-1v-5h7v5h-1a.945.945 0 0 0-1 1v4a.945.945 0 0 0 1 1h4a.945.945 0 0 0 1-1v-4a.945.945 0 0 0-1-1h-1v-5h7v5h-1a.945.945 0 0 0-1 1v4a.945.945 0 0 0 1 1h4a.945.945 0 0 0 1-1v-4a.945.945 0 0 0-1-1zm-13-13v-4h4v4h-4zm-5 14v4h-4v-4h4zm9 0v4h-4v-4h4zm9 4h-4v-4h4v4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

SqlDep.propTypes = {
  className: PropTypes.string
};

export default SqlDep;