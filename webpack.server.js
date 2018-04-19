const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // inform webpack we're building fo nodeJS, not browser
    target: 'node',

    // root file of server app
    entry: './src/index.js',

    // where to put output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // do not run any library in server side bundle (to not make server side bundle so large)
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);