const path = require("path");

module.exports = {
    // inform webpack we're building fo nodeJS, not browser
    target: 'node',

    // root file of server app
    entry: './src/index.js',

    // where to put output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // use babel on every file that runs through
    module: {
        rules: [
            {
                test: /\.js?$/, // to tell if it's a js file
                loader: 'babel-loader', // loader to run on each
                exclude: /node_modules/, // don't run loader in this folder regex
                options: { // transpile rules
                    presets: [
                        'react',
                        'stage-0', // async stuff
                        ['env', { targets: { browsers: ['last 2 versions'] }}]
                    ]
                }
            }
        ]
    }
}