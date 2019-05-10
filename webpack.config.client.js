const path = require('path');
const webpack = require('webpack');
const CURRENT_WORKING_DIR = process.cwd();
/***
 * mode sets process.env.NODE_ENV to the given value and 
    tells Webpack to use its built-in optimizations accordingly. If not explicitly set, it defaults to the
    value 'production'. It can also be set via the command line by passing the
    value as a CLI argument.
 * devtool specifies how source maps are generated, if at all. Generally, a
    source map provides a way of mapping code within a compressed file back
    to its original position in a source file to aid debugging.
 * entry specifies the entry file where Webpack starts bundling, in this case with the main.js file in the client folder. 
 * output specifies the output path for the bundled code, in this case, set to dist/bundle.js.
 * publicPath allows specifying the base path for all assets in the application.
   module sets the regex rule for the file extension to be used for transpilation,
   and the folders to be excluded. The transpilation tool to be used here is babel-loader.
 * HotModuleReplacementPlugin enables hot module replacement for react-hot-loader.
 * NoEmitOnErrorsPlugin allows skipping emitting when there are compile errors
*/
const config = {
    name: "browser",
    mode: "development",
    devtool: "eval-source-map",
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}

module.exports = config;