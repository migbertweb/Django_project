const path = require('path');
module.exports = {
    entry: './src/index.js', // path to our input file
    output: {
        filename: 'index-bundle.js', // output bundle file name
        path: path.resolve(__dirname, './static'), // path to our Django static directory
    },
    module: {
        rules: [{
                test: /\.js$/i, // loader babel a los .js
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/i, // loader a los .css
                include: path.resolve(__dirname, 'src'),
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ],
            },
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, './static'),
        watchContentBase: true,
        open: true,
    },
};