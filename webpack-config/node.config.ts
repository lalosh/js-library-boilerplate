import * as webpack from 'webpack';
import * as path from 'path';


require('dotenv').config({
    path: process.env.MODE == 'development' ?
        path.join(__dirname, '../.env.development')
        :
        path.join(__dirname, '../.env.production')
});


export const NodeConfiguration: webpack.Configuration = {
    target: 'node',
    output: {
        path: path.join(__dirname, '../dist/'),
        filename: 'index.js',
        library: 'index',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this',
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env),
        }),
    ],
}
