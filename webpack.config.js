'use strict';

var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src');

var isProduction = function () {
  return process.env.NODE_ENV === 'production';
}

module.exports = {
  target: 'web',
  cache: true,
  entry: {
    module: path.join(srcPath, 'index.js'),
    common: ['react', 'react-router']
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    library: ['Example', '[name]'],
    pathInfo: true
  },

  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory'},
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.join(__dirname, 'src')
      },
      { test: /\.json$/, loader: "json" }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$super', '$', 'exports', 'require']
      },
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      minify: true,
      favicon: 'favicon.ico'
    }),
    new webpack.NoErrorsPlugin()
  ],

  debug: isProduction() ? false : true,
  devtool: isProduction() ? '' : 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './tmp',
    historyApiFallback: true
  }
};