// @ts-check
const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './client/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

module.exports = config;
