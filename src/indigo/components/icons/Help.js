import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Help = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 16 16"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-.215-5.86c.399 0 .687-.317.742-.674l.042-.248c1.498-.302 2.708-1.017 2.708-2.763v-.028c0-1.829-1.347-2.846-3.327-2.846-1.21 0-2.132.385-2.86.99a.961.961 0 0 0-.358.742c0 .523.44.963.963.963.233 0 .453-.096.618-.22.495-.371 1.004-.55 1.595-.55.798 0 1.266.357 1.266.976v.028c0 .673-.55 1.045-1.747 1.196-.44.055-.701.371-.632.825l.137.935c.055.371.344.674.743.674h.11zm-1.307 2.076v.027c0 .66.51 1.17 1.197 1.17s1.196-.51 1.196-1.17v-.027c0-.66-.509-1.169-1.196-1.169-.688 0-1.197.509-1.197 1.169z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

Help.propTypes = {
  className: PropTypes.string
};

export default Help;
