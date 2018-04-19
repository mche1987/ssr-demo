const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js")

const config = {
    // inform webpack we're building fo nodeJS, not browser
    target: 'node',

    // root file of server app
    entry: './src/index.js',

    // where to put output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
}

module.exports = merge(baseConfig, config);