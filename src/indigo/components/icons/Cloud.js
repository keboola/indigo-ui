import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Cloud = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 18 12"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M14.512 4.53A5.617 5.617 0 0 0 9 0a5.622 5.622 0 0 0-4.988 3.03A4.496 4.496 0 0 0 0 7.5C0 9.983 2.017 12 4.5 12h9.75C16.32 12 18 10.32 18 8.25a3.732 3.732 0 0 0-3.488-3.72z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

Cloud.propTypes = {
  className: PropTypes.string
};

export default Cloud;