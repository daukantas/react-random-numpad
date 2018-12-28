const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const getCommonConfig = require('./common.config');

module.exports = merge(getCommonConfig(), {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: 'ReactRandomNumpad',
    libraryTarget: 'umd',
  },
  entry: {
   index: path.resolve(__dirname, '../src/components/RandomNumpad.tsx'),
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/@types/index.d.ts'),
      to: path.resolve(__dirname, '../dist'),
    }]),
  ],
  externals: [
    'react',
  ],
});
