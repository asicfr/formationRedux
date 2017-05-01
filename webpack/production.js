import webpack from 'webpack';
import { StatsWriterPlugin } from 'webpack-stats-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import webpackConfig from './config';

export default {
  ...webpackConfig,

  output: {
    ...webpackConfig.output,
    filename: 'bundle-[hash].js'
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        loader: ['css-loader', 'sass-loader', 'autoprefixer-loader'],
      })
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)$/,
      loader: 'url-loader?limit=10000',
    }]
  },

  plugins: [
    ...webpackConfig.plugins,
    new ExtractTextPlugin('styles-[hash].css'),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
    new StatsWriterPlugin({
      transform: data => JSON.stringify({
        main: data.assetsByChunkName.main[0],
        style: data.assetsByChunkName.main[1]
      })
    })

  ],

  stats: {
    colors: true,
    reasons: false,
    hash: false,
    version: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: false,
    cachedAssets: false
  }

};
