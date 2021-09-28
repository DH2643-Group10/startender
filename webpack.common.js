const path = require('path');

const loaders = [];

loaders.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: 'babel-loader'
})

loaders.push({
    test: /\.(ts|tsx)?$/,
    use: "ts-loader",
    exclude: /node_modules/,
})

module.exports = {
    entry: {
        app: './client/app.tsx'
    },
    module: {
        rules: loaders
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
      },
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(path.resolve(), 'dist')
    },
}