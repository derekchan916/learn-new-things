const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js',
    codeSplitting: './src/code-splitting-example.js'
  },
  // For hot reloading, entry should be one string
  // 'webpack-hot-middleware/client',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // Needed for webpack-dev-middleware
    // https://webpack.js.org/guides/development/#using-webpack-dev-middleware
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    // Only for hot reloading in webpack-hot-middleware
    // https://github.com/glenjamin/webpack-hot-middleware
    // new webpack.HotModuleReplacementPlugin()
    // For minifying used code from tree shaking
    //https://webpack.js.org/guides/tree-shaking/#minify-the-output
    new UglifyJSPlugin(),
    // For code splitting - avoiding duplicate modules
    // https://webpack.js.org/guides/code-splitting/#prevent-duplication
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        // For build performance
        // https://webpack.js.org/guides/build-performance/
        include: path.resolve(__dirname, "src"),
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, "src"),
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  // webpack-dev-server, use this when you don't need express server
  // https://webpack.js.org/guides/development/#using-webpack-dev-server
  // devServer: {
    // contentBase: './dist'
  // }

};
