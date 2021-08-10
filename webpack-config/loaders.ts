export const loadersRules = [
    {
        test: /\.js$/,
        use: [
            { loader: 'babel-loader' }
        ],
        exclude: [
            /node_modules/,
            /examples/
        ]
    },
    {
        test: /\.ts$/,
        use: [
            { loader: 'ts-loader' }
        ],
        exclude: [
            /node_modules/,
            /examples/
        ]
    },
];