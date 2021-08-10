import * as webpack from 'webpack';
import * as path from 'path';

import { loadersRules } from './loaders';
import { externalsLibraries } from './externals';

export const BaseConfiguration: webpack.Configuration = {
    mode: process.env.MODE == 'development' ? 'development' : 'production',
    entry: path.join(__dirname, '../src/index.ts'),
    devtool: process.env.MODE == 'development' ? 'source-map' : false,
    module: {
        rules: loadersRules
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    externals: externalsLibraries
}