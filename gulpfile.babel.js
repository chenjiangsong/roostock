import gulp from 'gulp'
import webpack from 'webpack'
import gutil from 'gulp-util'
import config from './webpack.config.js'
import yargs from 'yargs'

const argv = yargs.argv

gulp.task('default', () => {
  const dev = argv.dev
  if (dev) {
    config.plugins.concat(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }))
  }

  webpack(config,logback)
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
