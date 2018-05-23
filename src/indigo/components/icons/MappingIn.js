import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MappingIn = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 140 48"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M133 31v-6h7v6h-7zm0-14h7v6h-7v-6zm-9 8h7v6h-7v-6zm0-8h7v6h-7v-6zm-9 8h7v6h-7v-6zm0-8h7v6h-7v-6zM89.616 39.44a1.984 1.984 0 0 1-2.828 0 2.03 2.03 0 0 1 0-2.856l10.4-10.548H58a2.02 2.02 0 1 1 0-4.04h39.2L86.8 11.448a2.03 2.03 0 0 1 0-2.856 1.985 1.985 0 0 1 2.828 0l13.8 14a2.049 2.049 0 0 1 0 2.858L89.616 39.44zM46 48H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h44a2 2 0 0 1 2 2v44a2 2 0 0 1-2 2zM44 5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h38a1 1 0 0 0 1-1V5zm-6.225 21.206l-3.637.962a10.54 10.54 0 0 1-.734 1.747l1.9 3.264c.587 1.048.865 2.269 0 3.135-.865.866-2.009.6-3.129 0l-3.312-1.933c-.537.276-1.097.505-1.673.687l-.979 3.717C25.884 38.946 25.219 40 24 40c-1.219 0-1.848-1-2.213-2.218l-1-3.8c-.537-.179-1.059-.4-1.56-.663l-3.4 1.988c-1.05.584-2.266.864-3.129 0s-.6-2.014 0-3.137l2.013-3.456c-.243-.481-.45-.98-.618-1.492l-3.867-1.021c-1.157-.325-2.213-.992-2.213-2.214s1-1.852 2.213-2.219l3.868-1.018c.167-.513.373-1.012.617-1.493l-2.013-3.46c-.588-1.051-.865-2.268 0-3.132.865-.864 2.009-.6 3.129 0l3.4 1.987a10.479 10.479 0 0 1 1.56-.662l1-3.8c.327-1.157.991-2.214 2.213-2.214s1.847 1 2.214 2.214l.979 3.722c.576.179 1.136.408 1.671.686l3.314-1.932c1.048-.591 2.265-.868 3.129 0 .864.868.6 2.012 0 3.132l-1.9 3.267c.296.558.541 1.142.732 1.744l3.639.961c1.158.327 2.214.993 2.214 2.216 0 1.223-1 1.854-2.217 2.22zM24.1 19.635a4.356 4.356 0 1 0-.014 8.712 4.356 4.356 0 0 0 .014-8.712z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

MappingIn.propTypes = {
  className: PropTypes.string
};

export default MappingIn;