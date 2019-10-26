const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');


module.exports = merge(common, {
  mode: 'development',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist')
  },

  devServer: {
    contentBase: './dist'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // Injecting css into DOM
          'css-loader', // CSS to Js
        ]
      }
    ]
  }
});