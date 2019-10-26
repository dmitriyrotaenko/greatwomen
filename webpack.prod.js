const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production', 
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, './dist')
  },

  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './src/template.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css'
    })
  ],

  module: {
    rules: [        
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css into separate files
          'css-loader',// CSS to Js
          'postcss-loader'
        ]
      }
    ]
  }
});