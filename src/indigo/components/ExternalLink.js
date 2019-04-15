import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ href, children, className, ...props }) => (
  <a {...props} href={href} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
  </a>
);
ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ExternalLink;
