const path = require('path')
const config  = require('./config')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ENV = process.env.NODE_ENV


module.exports = {
    entry: path.resolve(config.basePath, './src/index.js'),

    resolve: {
        extensions: [".js", ".json"],
        alias: {
            '@': config.basePath,
            '@src': config.srcPath,
            '@examples': config.examplesPath
        }
    },  
    
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8920
                }
            }
            // , {
            //     loader: 'file-loader',
            //     options: {
            //         name: ENV == 'product' ? '[name].[hash].[ext]' : '[name].[ext]',
            //         outputPath: './images'
            //     }
            // }
        ]
        }, {
            test:/\.(eot|woff2|woff|ttf|svg)/,
            use:[{
                loader:'url-loader',
                options:{
                    name:'[name][hash:5].min.[ext]',
                    limit:5000,
                    publicPath:'',
                    outputPath:'dist/',
                    useRelativePath:true
                }
            }]
        }]
    },
    plugins: [
        new ProgressBarPlugin()
    ]
}