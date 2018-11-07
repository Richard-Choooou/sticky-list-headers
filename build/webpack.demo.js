const path = require('path')
const merge = require('webpack-merge')
const webpackDevConfig = require('./webpack.dev')
const config = require('./config')
const htmlWebpackPlugin = require('html-webpack-plugin')


const webpackDemoConfig = merge(webpackDevConfig, {
    mode: 'development',
    entry: path.resolve(config.examplesPath, 'index.js'),

    output: {
        filename: 'index.js',
        path: path.resolve(config.basePath, './dist'),
        publicPath: '/'
    },

    module: {
        rules: [{
            test: /\.html$/,
            use: [{loader: 'html-loader'}]
        }, ]
    }, 
    
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(config.examplesPath, 'index.html'),
            inject: 'body'
        })
    ]
})


module.exports = webpackDemoConfig