import webpack from 'webpack';
import path from 'path';

import webpackConfig from './config';

const src = path.resolve(__dirname, '../src');

export default {
  ...webpackConfig,

  devtool: 'source-map',

  entry: [
    ...webpackConfig.entry,
    'webpack-hot-middleware/client'
  ],

  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js|jsx$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }, {      
      test: /\.js|jsx$/,
      loader: 'babel-loader',
      include: src,
      query: { presets: ['react-hmre'] },
    }, {
      test: /\.scss$/,
      loader: ['style-loader', 'css-loader', 'sass-loader', 'autoprefixer-loader'],
      include: src,
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)$/,
      loader: 'url-loader?limit=10000',
    }],
  },

  plugins: [
    ...webpackConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

  ],

};
