const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = module.exports = {
    context: __dirname,
    entry: './src/entry.js',
    output: {
        path: '_build/',
        filename: "[name].out.js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.less']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react'],
                        sourceRoot: __dirname + "/apps"
                    }
                },
            }, {
                test: /\.html$/i,
                use: {
                    loader: "html-loader"
                }
            }, {
                test: /\.(less|css)$/,
                // use: ['style-loader', 'css-loader', 'less-loader']
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }
                    // }, {
                    //     loader: "less-loader" // compiles Less to CSS
                    // }
                ]
            }, {
                test: /\.(svg|gif|jpg|png)?$/,
                loader: {
                    loader: "file-loader",
                    query: {
                        name: "[path][name].[ext]",
                        publicPath: "/static/"
                    }
                }
            }
        ]
    },

    devtool: 'source-map',

    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],

    externals: {
        // jquery: 'jQuery'
    }
};

console.log('dump webpack config ...');
console.dir(config);
