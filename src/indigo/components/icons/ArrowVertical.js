import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ArrowVertical = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 10 14"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M9.824 9.34l-4.016 4.047v.006l-.406.407a.573.573 0 0 1-.812 0l-.406-.407v-.006L.168 9.34a.578.578 0 0 1 0-.815l.406-.407a.573.573 0 0 1 .812 0l3.606 3.642 3.614-3.642a.573.573 0 0 1 .812 0l.406.407a.578.578 0 0 1 0 .815zM.192 4.605l4-4.026V.573l.405-.405a.571.571 0 0 1 .81 0l.404.405v.006l4 4.026a.575.575 0 0 1 0 .81l-.405.405a.573.573 0 0 1-.81 0l-3.6-3.623-3.6 3.623a.573.573 0 0 1-.81 0l-.405-.405a.575.575 0 0 1 .011-.81z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

ArrowVertical.propTypes = {
  className: PropTypes.string
};

export default ArrowVertical;