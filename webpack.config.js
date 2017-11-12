const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfig) => {
  // eslint-disable-next-line
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new HtmlWebpackPlugin({
      title: '小微服',
      template: `${__dirname}/src/entry.ejs`,
      filename: 'index.html',
      favicon: `${__dirname}/src/assets/logo.png`,
      hash: true,
    }),
  ]);

  return webpackConfig;
};
