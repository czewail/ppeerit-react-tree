const path = require('path');
module.exports = {
    entry: './src/test.js',
    output: {
        path: path.resolve(__dirname, 'tests'),
        filename: 'test.js',
        publicPath: "/assets/",
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "tests"),
        compress: true,
        publicPath: "/assets/",
        port: 9001
    }
}