import path                  from 'path'
import webpack               from 'webpack'
import ExtractTextPlugin     from 'extract-text-webpack-plugin'
import WebpackNotifierPlugin from 'webpack-notifier'
import px2rem                from 'postcss-px2rem'

export default {
  watch: true,

  // debug: true,

  devtool: 'source-map',

  entry: {
    base_app: path.resolve('./src/base/index.js'),
    base_common: [
      'util'
    ]
  },

  output: {
    path: './dist/',
    filename: '[name].js',
    publicPath: ''
  },

  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
      Vue: 'vue',
      VueRouter: 'vue-router',
      util: 'util'
    }),
    new ExtractTextPlugin('[name].css'),
    new WebpackNotifierPlugin({ excludeWarnings: true, alwaysNotify: true })
  ],

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      }
    ]
  }
}
