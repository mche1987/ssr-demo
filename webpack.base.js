module.exports = {
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