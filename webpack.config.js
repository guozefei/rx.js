var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: {
      index: [
        './src/index.js'
      ]
    },
    output: {
        path: path.join(__dirname, 'src'),
        filename: '[name].bundle.js'
    },
    plugins: [
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.(jsx|js)$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }]
    },
    contentBase: 'src',
    watch: true
};
