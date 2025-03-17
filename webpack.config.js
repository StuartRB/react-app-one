const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app1',
            remotes: {
                app2: 'app2@http://localhost:8082/remoteEntry.js',
            },

        })
    ],
    resolve: {
        extensions: ['.*', '.js', '.jsx'],
    },
    devServer: {
        static: path.resolve(__dirname, './public'),
    },
};