const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CircularDependency = require('circular-dependency-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = require('./webpack.base')({
  mode: 'development',
  resolve: { extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'] },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  plugins: [
    new CheckerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(process.cwd(), 'index.html'),
      inject: true,
    }),
    new CircularDependency({
      exclude: /a\.js|node_modules/,
      failOnError: false,
    }),
  ],
  devtool: 'source-map',
  performance: {
    hints: false,
  },
});
