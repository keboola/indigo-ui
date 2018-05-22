const pascalCase = require('pascal-case');
const prettier = require('prettier');

module.exports = {
  svgoPlugins: [
    {
      removeTitle: true
    }
  ],
  filenameTemplate: function(svgBasename) {
    return pascalCase(svgBasename);
  },
  template: function (data) {
    const jsxSvgWithProps = data.jsxSvg.replace(
      /<svg([\s\S]*?)>/,
      (match, group) => `<svg${group} className=\{classNames('icon', className)\} {...props}>`
    );

    const js = `import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

const ${data.name} = ({ className, ...props }) => {
  return (
    ${jsxSvgWithProps}
  )
};

${data.name}.propTypes = {
  className: PropTypes.string
};

export default ${data.name};
`;
    return prettier.format(js, {
      singleQuote: true
    })
  }
};
