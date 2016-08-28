
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
    vue_app: path.resolve('./src/vue/index.js'),
    common: [
      'vue',
      'lodash',
      'util',
      'vue-router',
      'animate.css/animate.css'
    ]
  },

  output: {
    path: './dist/',
    filename: '[name].js',
    publicPath: ''
  },

  resolve: {
    alias: {
      util: path.resolve('./src/common/util.js'),
      vue: 'vue/dist/vue.js'
    }
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
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
        // loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
        // loader: 'style!css!postcss!sass',
        exclude: /node_modules/
      }
    ]
  },
  postcss: function() {
    return [px2rem({remUnit: 75})]
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('style', 'css'),
      scss: ExtractTextPlugin.extract('style', 'css!postcss!sass')
    }
  }
}
