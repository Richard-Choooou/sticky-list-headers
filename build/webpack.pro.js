const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const config = require('./config')
const ENV = process.argv.NODE_ENV

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    output: {
        filename: 'scroll-fixed-header.min.js',
        path: path.resolve(config.basePath, './dist'),
        publicPath: '/dist',
        libraryTarget: 'umd',
        library: 'ScrollFiexdHeader',
        libraryExport: "default"
    },

    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [
                    {loader: 'css-loader'}, 
                    {loader: 'sass-loader'}
                ]
            }
        ]
    }
})

    
