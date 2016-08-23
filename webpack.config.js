
import path                  from 'path'
import webpack               from 'webpack'
import ExtractTextPlugin     from 'extract-text-webpack-plugin'
import WebpackNotifierPlugin from 'webpack-notifier'
import px2rem                from 'postcss-px2rem'


export default {
  watch: true,

  entry: {
    vue_app: path.resolve('./App/vue/index.js'),
    vue_common: [
      'vue',
      'underscore',
      'util',
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
      util: path.resolve('./common/util.js'),
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
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function() {
    return [px2rem({remUnit: 75})];
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('css'),
      sass: ExtractTextPlugin.extract("css!sass")
    }
  }
}
