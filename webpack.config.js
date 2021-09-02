const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: "./index.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
        clean: true,
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Template Web App',
            lang: "en",
            favicon: "./style/favicon/favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, 'src/style')],
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: ["file-loader", { loader: "image-webpack-loader", options: { bypassOnDebug: true, disable: true } }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@Components': path.resolve(__dirname, 'src/components/'),
            '@State': path.resolve(__dirname, 'src/state/'),
            '@Types': path.resolve(__dirname, 'src/types/'),
            '@Style': path.resolve(__dirname, 'src/style/'),
            '@Services': path.resolve(__dirname, 'src/services/'),
        },
    },
    // Optimization Guides used (tree shaking!):
    // https://webpack.js.org/guides/tree-shaking/
    // https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking
    // https://medium.com/@craigmiller160/how-to-fully-optimize-webpack-4-tree-shaking-405e1c76038
    // Needs to have sideEffects handled before tree shaking works.
    // Only works in production mode.
    optimization: {
        usedExports: true, // tells webpack to tree-shake
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ],
    },
};