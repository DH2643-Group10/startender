import path from 'path';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
    devtool: 'inline-soruce-map',
    mode: 'development',
    devServer: {
        static: {
            directeory: path.join(path.resolve(), "dist")
        },
        port: 3000
    }
})
