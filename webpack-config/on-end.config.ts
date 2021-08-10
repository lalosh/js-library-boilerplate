import { Configuration } from "webpack";
const FileManagerPlugin = require('filemanager-webpack-plugin');

export const onEndConfigurations: Configuration = {
    plugins: [
        new FileManagerPlugin({
            events: {
                onEnd: [
                    {
                        copy: [
                            { source: './dist/src', destination: './dist/types' }
                        ],
                        delete: [
                            './dist/__test__',
                            './dist/webpack*',
                            './dist/webpack-config',
                            './dist/jest*',
                            './dist/main.js*',
                            './dist/src',
                        ],
                    }
                ],
            },
            runTasksInSeries: true,
        }),
    ]
}