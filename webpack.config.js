const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './index.js',
    devtool: "source-map",
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
    ],
    resolve: {
        modules: [__dirname, 'src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
      },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader')
            },
            {
                test:/\.s?css$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
			    test: /\.svg/,
			    use: {
			        loader: 'svg-url-loader',
			        options: {
                        limit: 1024*1024
                    }
			    }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                'file-loader'
                ]
            },
        ]
    }
}