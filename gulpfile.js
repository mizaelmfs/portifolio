var gulp  = require('gulp');
var connect = require('gulp-connect');
var inject = require('gulp-inject');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

 //task for connect
gulp.task('index', function () {
  var target = gulp.src('index.html');

  var source = gulp.src(['**/*.js', '**/*.css'], {read: false});

  return target.pipe(inject(source, {relative: true})).pipe(gulp.dest('./'));
});

//task for port
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true,
    port: 8081
  });
});

gulp.task('html', function () {
  gulp.src('./**/*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./**/*.css')
    .pipe(connect.reload());
});

//task for sass
gulp.task('sass', function(){
    return gulp.src('sass/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

//task for watch
gulp.task('watch', function(){
    gulp.watch(['./**/*.sass'], ['sass']);
    gulp.watch(['./**/*.html'], ['html']);
    gulp.watch(['./**/*.css'], ['css']);
});

//task default
gulp.task('default', ['sass', 'watch', 'connect', 'index']);