import * as webpackMerge from 'webpack-merge';
import { BaseConfiguration } from './webpack-config/base.config'
import { NodeConfiguration } from './webpack-config/node.config';
import { BrowserConfiguration } from './webpack-config/browser.config';
import { onStartConfigurations } from './webpack-config/on-start.config';
import { onEndConfigurations } from './webpack-config/on-end.config';


let PlatformsConfigurations = [
    onStartConfigurations,
    NodeConfiguration,
    BrowserConfiguration,
    onEndConfigurations,
];


export default PlatformsConfigurations.map(config => webpackMerge.merge(config, BaseConfiguration));