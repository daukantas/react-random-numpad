const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getCommonConfig = () => ({
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    fs: 'empty',
    child_process: 'empty',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.scss', '.css'],
  },
  module: {
    rules: [
      /**
       * Typescript loaders
       */
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          sourceMap: true,
        },
        exclude: [
          /node_modules/
        ],
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              localIdentName: '[local]_[hash:base64:5]',
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'styles.min.css',
    }) 
  ]
});

module.exports = getCommonConfig;
