module.exports = ({ config }) => {
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
