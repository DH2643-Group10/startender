import path from 'path';

const loaders = [];

loaders.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: 'babel-loader'
})

export default {
    entry: {
        app: './client/app.jsx'
    },
    module: {
        rules: loaders
    },
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(path.resolve(), 'dist')
    }
}