import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ExternalLink = ({ href, children, className, ...props }) => (
  <a
    {...props}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={classnames(className)}
  >
    {children}
  </a>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default ExternalLink;
