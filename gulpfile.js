var gulp = require('gulp');
var sass = require('gulp-sass');
var sassOptions = {
    includePaths: ['sass'],
    outputStyle: 'compressed'
  };
var merge = require('merge-stream');
sass.compiler = require('node-sass');

//compile
gulp.task('sass', function () {
  var forum = gulp.src('src/forum.scss')
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(gulp.dest('forum/dist'))
  var site = gulp.src('src/site.scss')
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(gulp.dest('site/dist'));
  return merge(forum,site)
});



gulp.task('sass:watch', function () {
  gulp.watch('src/*.scss', gulp.series('sass'));
});