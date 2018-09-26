const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.module.rules.unshift({
    test: /\.(js|jsx|mjs)$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: [
      {
        loader: 'eslint-loader',
        options: {
          failOnError: true,
        },
      },
    ],
  });

  return config;
};
