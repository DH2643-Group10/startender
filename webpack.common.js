import path from 'path';

const loaders = [];

loaders.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: 'babel-loader'
})

loaders.push({ 
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
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
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css','.scss'],
      },
}