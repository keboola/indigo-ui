import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Extractor = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 25"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M22 25H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h7v2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6V1h7a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2zM15.358 9.285a.96.96 0 0 1 1.358 1.357l-3.833 3.833a.9.9 0 0 1-.167.24 1.071 1.071 0 0 1-1.431 0 .935.935 0 0 1-.144-.217l-3.856-3.856a.96.96 0 0 1 1.358-1.357L11 11.642V1a1 1 0 1 1 2 0v10.642l2.358-2.357z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

Extractor.propTypes = {
  className: PropTypes.string
};

export default Extractor;
