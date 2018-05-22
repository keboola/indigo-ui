import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Sandbox = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 26 21"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M13 20.97L0 16.593v-7.3l13-4.376.96.388-.05 1.475-.91-.223-10.56 3.557L13 13.67l10.56-3.556-5.75-2.024.17-1.453L26 9.293v7.3L13 20.97zm3.77-16.791l-.99 4.21.79.189a2.079 2.079 0 0 1 1.53 2.5l-.13.567-6.91-.519.39-1.642a2.052 2.052 0 0 1 2.47-1.542l.79.189.99-4.21-2.05-.492.8-3.429 5.18 1.241-.8 3.429-2.06-.491zm-1.5-2.838l-.3 1.263 3.04.727.3-1.263-3.04-.727z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

Sandbox.propTypes = {
  className: PropTypes.string
};

export default Sandbox;
