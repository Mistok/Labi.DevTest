const jsFiles = [
    $.path.jquery,
    $.path.js
];

module.exports = function(){
    $.gulp.task('scripts', function () {
        return $.gulp.src(jsFiles)
            .pipe($.gp.plumber())// проверка на ошибки
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.babel({presets: ['@babel/preset-env']}))// перегнали в ec5 стандарт
            .pipe($.gp.concat('all.js'))// объединили в 1 файл
            .pipe($.gp.uglify())// оптимизация / минификация
            .pipe($.gp.rename('all.min.js'))// переименовали готовый файл
            .pipe($.gp.sourcemaps.write(''))
            .pipe($.gulp.dest('build/js'))// выгрузили готовый файл в папку
            .pipe($.browserSync.stream());// перезагрузили браузер
    });
};