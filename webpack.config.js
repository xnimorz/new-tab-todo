var path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: __dirname + '/build/js',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules|vendor/, loader: "babel-loader"}
        ]
    }
};
