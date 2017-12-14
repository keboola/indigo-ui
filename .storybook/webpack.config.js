const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const reactScriptsConfig = require('react-scripts/config/webpack.config.dev');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // This is a linter. The first rule from react-scripts dev config
  config.module.rules.unshift(reactScriptsConfig.module.rules[0]);

  return config;
};
