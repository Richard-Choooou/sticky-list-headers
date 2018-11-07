const path = require('path')
const basePath = path.resolve(__dirname, '../', '../')
module.exports = {
    basePath: basePath,
    distPath: path.resolve(basePath, 'dist'),
    srcPath: path.join(basePath, 'src'),
    examplesPath: path.join(basePath, 'examples')
}