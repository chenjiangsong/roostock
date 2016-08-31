import gulp from 'gulp'
import webpack from 'webpack'
import gutil from 'gulp-util'
import vueConfig from './build/webpack.vue.config.js'
import baseConfig from './build/webpack.base.config.js'
import yargs from 'yargs'

const argv = yargs.argv

gulp.task('default', () => {
  const dev = argv.dev
  if (dev) {
    vueConfig.plugins.concat(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }))
  }

  webpack(vueConfig, logback)
})

gulp.task('base', () => {
    webpack(baseConfig, logback)
})


function logback(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build', err)
    }

    gutil.log('[webpack:build]', stats.toString({
      chunks: false,
      assets: false,
      children: false,
      colors: true
    }))
}
