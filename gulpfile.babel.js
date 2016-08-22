import gulp from 'gulp'
import webpack from './webpack.config.js'

gulp.task('default', () => {
  console.log('gulp success')
  console.log(webpack.a);
})

  
