
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
      'underscore',
      'util',
      'vue-router'
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
    }
  },

  plugins: [
    new webpack.ProvidePlugin({
      _: 'underscore',
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
        loader: "style-loader!css-loader!postcss-loader!sass-loader"
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
