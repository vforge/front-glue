var path = require('path');
var webpack = require('webpack');
var cssnext = require('postcss-cssnext');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');

var cssExtract = new ExtractTextPlugin('[name].css');
var svgExtract = new ExtractTextPlugin('[name].svg');

module.exports = {
  cache: false,
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      './scripts/app.js',
      './styles/app.css'
    ]
  },
  output: {
    path: path.join(__dirname, 'build/'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
      'normalize': path.join(__dirname, '/node_modules/normalize.css/normalize.css'),
    },
    modules: ['./node_modules', './scripts', './styles'],
    extensions: ['.js', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        // loader: 'css-loader'
        loader: cssExtract.extract({
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.svg$/,
        loader: svgExtract.extract({
          loader: 'raw-loader'
        })
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            require('postcss-cssnext'),
            // require('lost')(),
            // require('postcss-reporter')()
          ],
          sassLoader: {
            includePaths: [
              path.join(__dirname, 'styles')
            ]
          },
        }
      }),
      new WebpackNotifierPlugin({
        alwaysNotify: true
      }),
      // new webpack.ProvidePlugin({
      //     $: 'jquery',
      //     jQuery: 'jquery'
      // }),
      cssExtract,
      svgExtract
  ],
  // postcss: function (webpack) {
  //   return [
  //     // require("postcss-import")({ addDependencyTo: webpack }),
  //     // require("postcss-url")(),
  //     require("postcss-cssnext")(),
  //     // add your "plugins" here
  //     // ...
  //     // and if you want to compress,
  //     // just use css-loader option that already use cssnano under the hood
  //     // require("postcss-browser-reporter")(),
  //     // require("postcss-reporter")(),
  //   ]
  // },
};
