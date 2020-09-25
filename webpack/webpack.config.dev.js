const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: false,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 3000,
    historyApiFallback: true,
    open: true,
  },
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
    },
  },
});
