import gulp from 'gulp'
import webpack from 'webpack'
import config from './webpack.config.js'

gulp.task('default', () => {
  webpack(config,logback)
})


function logback(err, stats) {
    // console.log(stats.toString());
    if (stats.hasErrors() || stats.hasWarnings()) {
        console.log('\n==============================');
        console.log(stats.compilation.errors.toString() || stats.compilation.warnings.toString());
    } else {
        console.log('--------------------------------------');
        console.log('webpack success at %s', new Date(stats.endTime).toLocaleString());
    }
}
