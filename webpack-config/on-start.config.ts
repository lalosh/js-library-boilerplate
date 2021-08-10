import { Configuration } from "webpack";
const FileManagerPlugin = require('filemanager-webpack-plugin');

export const onStartConfigurations: Configuration = {
    plugins: [
        new FileManagerPlugin({
            events: {
                onStart: {
                    delete: [
                        './dist'
                    ]
                },
            }
        })
    ]
}