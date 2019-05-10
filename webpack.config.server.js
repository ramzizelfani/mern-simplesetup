const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd();

/**
 * The mode option is not set here explicitly but will be passed as required when
   running the Webpack commands with respect to running for development or
   building for production.
 * Webpack starts bundling from the server folder with server.js, then outputs the
   bundled code in server.generated.js in the dist folder.
 */
const config = {
    name: "server",
    entry: [
        path.join(CURRENT_WORKING_DIR, './server/server.js')
    ],
    target: "node",
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist/'),
        filename: "server.generated.js",
        publicPath: '/dist/',
        libraryTarget: "commonjs2"
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            }
        ]
    }
}

module.exports = config;