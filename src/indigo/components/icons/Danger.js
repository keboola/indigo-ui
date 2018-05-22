import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Danger = ({ className, ...props }) => {
  return (
    <svg
      width="22"
      height="19"
      viewBox="0 0 22 19"
      className={classNames('icon', className)}
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M-1-2h24v24H-1z" />
        <path
          d="M0 19h22L11 0 0 19zm12-3h-2v-2h2v2zm0-4h-2V8h2v4z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

Danger.propTypes = {
  className: PropTypes.string
};

export default Danger;
