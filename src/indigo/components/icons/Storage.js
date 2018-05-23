import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Storage = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 22"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M2 16h20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zm1 2h18a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM2 8h20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zm1 2h18a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM2 0h20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm1 2h18a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

Storage.propTypes = {
  className: PropTypes.string
};

export default Storage;