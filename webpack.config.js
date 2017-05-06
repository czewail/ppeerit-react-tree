const path = require('path');
module.exports = {
    entry: './src/tree.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'tree.js',
        libraryTarget: 'umd',
        library: 'Tree',
        publicPath: "/assets/",
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            root: "React"
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
}