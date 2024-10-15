import path from 'path'

export default {
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
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
        extensions: ['.tsx', '.ts', '.js'],
    },
};