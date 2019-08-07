module.exports = function () {
    $.gulp.task('allimg', function () {
        return $.gulp.src('img/**/*.{jpg,svg,png}')
            .pipe($.gulp.dest('build/img'))
    })
};