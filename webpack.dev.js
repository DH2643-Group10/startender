const path = require('path');
const wpMerge = require('webpack-merge');
const common = require('./webpack.common.js');

const { merge } = wpMerge;

module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(path.resolve(), "dist")
        },
        port: 3000
    }
})
