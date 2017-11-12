const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = (webpackConfig, env) => {
  const production = env === 'production'
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new HtmlWebpackPlugin({
      title: '小微服',
      template: `${__dirname}/src/entry.ejs`,
      filename: 'index.html',
      favicon: `${__dirname}/src/assets/logo.png`,  
      hash: true
    }),
  ])

  return webpackConfig;
}