import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import WebpackNotifierPlugin from 'webpack-notifier'

export default {
  watch: true,

  entry: {
    vue_bundle: path.resolve('./vue.router.js'),
    vue_common: [
      'vue',
      'underscore',
      'h5Common',
      'vueRouter'
    ]
  },

  output: {
    path: './dist/',
    filename: '[name].js',
    publicPath: ''
  },

  resolve: {
    alias: {
      h5Common: path.resolve('./common/h5.common.js'),
      vueRouter: 'vue-router'
    }
  },

  plugins: [
    new webpack.ProvidePlugin({
      _: 'underscore',
      Vue: 'vue',
      VueRouter: 'vue-router'
    }),

    new ExtractTextPlugin('[name].css')
  ],

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },

  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('css'),
      sass: ExtractTextPlugin.extract("css!sass")
    }
  }
}
