import { merge } from 'webpack-merge';
import common from './webpack.common.js';

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

export default merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    }
});
