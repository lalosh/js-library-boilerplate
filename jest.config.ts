import type { Config } from '@jest/types';
require('dotenv').config({ path: './.env.test' });

const jestConfig: Config.InitialOptions = {
    testTimeout: 90000,
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./jest.setup.ts'],
}

module.exports = jestConfig;