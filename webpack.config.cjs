const path = require('path') 

module.exports = {
    entry: {
        // index: './index.ts',
        main: './src/main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devtool: 'inline-source-map',
    mode: "development",
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};