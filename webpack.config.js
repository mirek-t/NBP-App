const HtmlWebpackPlugin = require("html-webpack-plugin")

//common JS
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.[contenthash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"})
    ],
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader")
            }
        ]
    }
}