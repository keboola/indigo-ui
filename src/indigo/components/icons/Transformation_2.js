import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Transformation_2 = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 44 48"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M28 28v-2h16v2H28zm0-20h16v2H28V8zM0 46V2a2 2 0 0 1 2-2h22v4H5a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h19v4H2a2 2 0 0 1-2-2zm21.784-8.215l-1-3.8c-.537-.179-1.059-.4-1.56-.663l-3.4 1.988c-1.05.584-2.266.864-3.129 0s-.6-2.014 0-3.137l2.013-3.456c-.244-.48-.45-.98-.618-1.492l-3.867-1.021c-1.157-.325-2.213-.992-2.213-2.214s1-1.852 2.213-2.219l3.868-1.018c.167-.513.373-1.012.617-1.493l-2.013-3.46c-.588-1.052-.865-2.268 0-3.132.865-.864 2.009-.6 3.129 0l3.4 1.987a10.479 10.479 0 0 1 1.56-.662l1-3.8c.328-1.157.992-2.214 2.214-2.214v11.662a4.347 4.347 0 0 0 0 8.692V40c-1.222 0-1.848-.994-2.214-2.215zM33 16h-5v-2h5v2zm7 6H28v-2h12v2zm-7 12h-5v-2h5v2zm7 6H28v-2h12v2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

Transformation_2.propTypes = {
  className: PropTypes.string
};

export default Transformation_2;
