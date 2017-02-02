// read config from argv
const prod = process.argv.indexOf('-p') !== -1;
const notify = process.argv.indexOf('--env.notify') !== -1;

console.log(`=> ${prod ? 'Production' : 'Development'} build ${notify ? '(notify)' : ''}`);

// boot
const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const cssExtract = new ExtractTextPlugin('[name].css');
const svgExtract = new ExtractTextPlugin('[name].svg');

const config = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      './source/scripts/app.js',
      './source/styles/app.css',
    ],
  },
  output: {
    path: path.join(__dirname, 'build/'),
    filename: '[name].js',
  },
  resolve: {
    modules: ['./node_modules', './source/scripts', './source/styles'],
    extensions: ['.js', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loader: cssExtract.extract({
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.svg$/,
        loader: svgExtract.extract({
          loader: 'raw-loader',
        }),
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': (prod ? '"production"' : '""'),
      },
    }),
    new CopyWebpackPlugin([
      { from: 'source/assets', to: 'assets' },
    ]),
    new webpack.LoaderOptionsPlugin({
      minimize: prod,
      options: {
        postcss: [
          require('postcss-cssnext'),
          // require('lost')(),
          // require('postcss-reporter')()
        ],
        sassLoader: {
          includePaths: [
            path.join(__dirname, 'styles'),
          ],
        },
      }
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
    }),
    cssExtract,
    svgExtract,
  ],
};

// environment-dependant configuration
if (prod) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true
      }
    })
  );
} else {
  config.devtool = '#cheap-module-source-map';
}

// add notify only if it's enabled
if (notify) {
  const WebpackNotifierPlugin = require('webpack-notifier');

  config.plugins.push(
    new WebpackNotifierPlugin({
      alwaysNotify: true,
    })
  );
}

module.exports = config;
