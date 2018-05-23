import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Edit = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 14 14"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M0 14h2.916L11 6 8 3l-8 8v3zM11 0L9 2l3 3 2-2-3-3z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

Edit.propTypes = {
  className: PropTypes.string
};

export default Edit;