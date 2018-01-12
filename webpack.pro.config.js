import merge from 'webpack-merge';
import common from './webpack.config';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
});
