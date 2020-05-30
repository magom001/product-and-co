const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PostCSSAssetsPlugin = require('postcss-assets-webpack-plugin');

// @ts-check
const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
const config = (env = {}) => {
    return [
        {
            mode: env.production ? 'production' : 'development',
            devtool: env.production ? 'none' : 'inline-source-map',
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
                                        localIdentName: env.production
                                            ? '[hash:base64]'
                                            : '[path][name]__[local]',
                                    },
                                },
                            },
                        ],
                    },
                    {
                        test: /\.svg/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: '[contenthash].[ext]',
                                    publicPath: '/static/app',
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
                new PostCSSAssetsPlugin({
                    test: /\.css$/,
                    log: false,
                    plugins: [
                        require('cssnano')({
                            preset: 'default',
                        }),

                        require('autoprefixer')(),
                        require('postcss-preset-env')({
                            stage: 3,
                        }),
                        require('postcss-calc')(),
                    ],
                }),
                new webpack.DefinePlugin({
                    __DEV__: JSON.stringify(true),
                }),
            ],
            resolve: {
                extensions: ['.tsx', '.ts', '.js'],
            },
        },
    ].concat(
        env.production
            ? {
                  mode: 'production',
                  entry: './server/index.ts',
                  output: {
                      filename: 'server.js',
                      path: path.resolve(__dirname),
                  },
                  target: 'node',
                  resolve: {
                    extensions: ['.ts', '.js']
                  },
                //   node: {
                //     fs: 'empty',
                //     net: 'empty'
                //   },
                  module: {
                      rules: [
                          {
                              test: /\.tsx?/,
                              use: 'ts-loader',
                              exclude: /node_modules/,
                          },
                      ],
                  },
              }
            : []
    );
};

module.exports = config;
