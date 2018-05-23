import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ExtractorTo = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 86 50"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M44 50H4a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h14v4H6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H30V2h14a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4zM30.733 18.584a1.928 1.928 0 0 1 2.703.018c.744.743.753 1.944.02 2.698L25.77 28.97c-.085.177-.198.34-.335.48a2.15 2.15 0 0 1-2.87 0 1.87 1.87 0 0 1-.289-.434L14.544 21.3a1.919 1.919 0 0 1 .02-2.698 1.928 1.928 0 0 1 2.703-.018l4.727 4.717v-21.3C21.994.896 22.89 0 23.999 0c1.108 0 2.005.896 2.005 2.001v21.3l4.73-4.717zM64 12l22 14-22 14V12z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

ExtractorTo.propTypes = {
  className: PropTypes.string
};

export default ExtractorTo;