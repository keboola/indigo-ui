import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SupportBy = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 15 15"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M5.25 7.313a.938.938 0 1 0 0 1.875.938.938 0 0 0 0-1.876zm4.5 0a.938.938 0 1 0 0 1.875.938.938 0 0 0 0-1.876zM7.5 0C3.36 0 0 3.36 0 7.5 0 11.64 3.36 15 7.5 15c4.14 0 7.5-3.36 7.5-7.5C15 3.36 11.64 0 7.5 0zm0 13.5c-3.308 0-6-2.692-6-6 0-.217.015-.435.038-.645a7.546 7.546 0 0 0 3.907-4.028 7.48 7.48 0 0 0 7.807 2.978c.158.532.248 1.103.248 1.695 0 3.308-2.692 6-6 6z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

SupportBy.propTypes = {
  className: PropTypes.string
};

export default SupportBy;
