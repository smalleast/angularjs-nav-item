/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var scripts = [
  'src/bower/main.js',
  'src/bower/directive/dx-loading.js',
  'src/bower/service/dx-loading.js'
];


gulp.task('clean', function () {
  return del('dist');
});


gulp.task('scripts', function () {
  return gulp.src(scripts)
    .pipe(concat('angular-dx-loading.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min",
      extname: ".js"
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['clean'], function () {
  gulp.start(['scripts']);
});
