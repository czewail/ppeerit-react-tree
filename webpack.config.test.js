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
        },{
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "tests"),
        compress: true,
        publicPath: "/assets/",
        port: 9001
    }
}