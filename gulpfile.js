const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
  return gulp.src('./src/css/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

function images() {
  return gulp.src('./src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
}

function watch() {
  gulp.watch('./src/css/*.scss', gulp.parallel(styles));
}

exports.default = gulp.parallel(styles, images);
exports.watch = watch;