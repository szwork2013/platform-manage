var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('ExtractTextPlugin')

module.exports = {
    // devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './boot/index.js'
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 3000
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/static/'
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"dev"'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/, include: __dirname},
            {test: /\.less$/, loader: ExtractTextPlugin.extract('style!css!autoprefixer!less')},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('style!css!autoprefixer!sass?sourceMap')},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"}
        ]
    }
}
