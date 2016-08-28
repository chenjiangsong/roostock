import gulp from 'gulp'
import webpack from 'webpack'
import gutil from 'gulp-util'
import config from './webpack.config.js'

gulp.task('default', () => {
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
