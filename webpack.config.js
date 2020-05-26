const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        path: path.resolve(__dirname, 'static', 'app'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]',
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

module.exports = config;
