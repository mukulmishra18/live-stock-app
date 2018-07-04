const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
};
