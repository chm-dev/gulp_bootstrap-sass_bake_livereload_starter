var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');
require('gulp-grunt')(gulp); // add all the gruntfile tasks to gulp


gulp.task('connect', function() {
    connect.server({
        root: 'public',
        livereload: true
    });
});

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/dist/css'));
});



gulp.task('livereload', function() {
    gulp.src('./public/**/**/*')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./public/**/*', ['livereload']);
    gulp.watch('./templates/**/*', ['grunt-bake:build']);
});

gulp.task('default', ['connect', 'watch', 'sass', 'grunt-bake:build']);
