const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'script.js',
  },
  module: {
    rules: [
        {
          test: /\.(ts)$/,
          use: ['ts-loader'],
        },
        {
            test: /\.(scss|css)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
            test: /\.(woff2?|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new CopyPlugin({
        patterns: [
            {
              from: path.resolve(__dirname, 'src/assets'),
              to: path.resolve(__dirname, 'dist/assets')
            },
          ]
      }),
    new MiniCssExtractPlugin({
        filename: '[name].css',
    })
  ],
  devServer: {
      watchFiles: path.join(__dirname, 'src'),
      port: 9000,
  },
};