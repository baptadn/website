'use strict';

var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src');

const isProduction = process.env.NODE_ENV === 'production';

var plugins = [
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
    favicon: 'favicon-96x96.png'
  }),
  new webpack.NoErrorsPlugin()
];

if (isProduction) {
  plugins = plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false
      }
    }),
  ]);
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
  plugins: plugins,
  debug: !isProduction,
  devtool: isProduction ? '' : 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './tmp',
    historyApiFallback: true
  }
};
