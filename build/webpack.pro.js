const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const config = require('./config')
const ENV = process.argv.NODE_ENV

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    output: {
        filename: 'sticky-list-headers.min.js',
        path: path.resolve(config.basePath, './dist'),
        publicPath: '/dist',
        libraryTarget: 'umd',
        library: 'StickyListHeaders',
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

    
