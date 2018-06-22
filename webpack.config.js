var debug = process.env.NODE_ENV !== 'production'
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let config = {
  mode: debug ? 'development' : 'production',
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : false,
  plugins: debug ? [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].min.css",
    })
  ],
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader'},
      {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      }
    ]
  },
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist/js',
    filename: 'app.min.js',
    libraryTarget: 'umd',
    library: 'bookingWizard',
    umdNamedDefine: true,
  }
}

module.exports = config