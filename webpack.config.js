const path = require("path");

module.exports = {
    mode: "production",
    watch: true,
    entry: path.join(__dirname, "webpack", "main"),
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "static/js"),
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "bower_components"),
                ],
                loader: "babel-loader",
                query: {
                    presets: ["@babel/preset-env"],
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {

                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".json", ".js", ".jsx"],
    },
};