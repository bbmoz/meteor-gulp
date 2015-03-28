var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    stylish = require('gulp-jscs-stylish');

var srcs = {
    lint: [
        '!./../.meteor/**/*.js',
        '!./../packages/**/*.js',
        '!./../**/node_modules',
        './../**/*.js'
    ]
};

gulp.task('lint', function () {
    return gulp.src(srcs.lint)
        .pipe(jshint('.jshintrc'))
        .pipe(jscs('.jscsrc'))
        .pipe(stylish.combineWithHintResults())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function () {
    gulp.watch(srcs.lint, ['lint']);
});

gulp.task('default', ['lint', 'watch']);