import path from 'path';
import wpMerge from 'webpack-merge';
import common from './webpack.common.js';

const { merge } = wpMerge;

export default merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(path.resolve(), "dist")
        },
        port: 8080
    }
})
