const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', path.resolve(__dirname, './../client/index.js')],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './../dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './../dist'),
        compress: true,
        port: 5000,
        https: true,
        index: path.resolve(__dirname, './../dist/index.html'),
        allowedHosts: [
            'localhost'
        ],
        sockHost: 'localhost',
        sockPort: 5000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css']
    }
};
