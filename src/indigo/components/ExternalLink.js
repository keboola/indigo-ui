import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ href, children, ...restProps }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...restProps}>
    {children}
  </a>
);
ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ExternalLink;
