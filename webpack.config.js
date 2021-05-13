const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const MyWebpackPlugin = require('./plugins/MyWebpackPlugin')
// const FileListPlugin = require('./plugins/FileListPlugin')
const WatcherPlugin = require('./plugins/WatcherPlugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].boundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'custom-plugin',
    }),
    new CleanWebpackPlugin(),
    // new MyWebpackPlugin({
    //   msg: 'this is a msg',
    // }),
    // new FileListPlugin(),
    new WatcherPlugin(),
  ],
}
