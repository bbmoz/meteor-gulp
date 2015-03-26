var gulp = require('gulp'),
    jshint = require('gulp-jshint');

var srcs = {
    lint: ['./../client/templates/**/*.js', './../lib/**/*.js', './../server/**/*.js']
};

gulp.task('lint', function () {
    return gulp.src(srcs.lint)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('watch', function () {
    gulp.watch(srcs.lint, ['lint']);
});

gulp.task('default', ['lint', 'watch']);