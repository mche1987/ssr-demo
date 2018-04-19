const path = require("path");

module.exports = {
    // root file for client app
    entry: './src/client/client.js',

    // where to put output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
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