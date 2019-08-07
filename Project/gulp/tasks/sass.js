module.exports = function(){
    $.gulp.task('sass', function () {
        return $.gulp.src('sass/style.scss')
            .pipe($.gp.plumber())// проверка на ошибки
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())// перегнали в цсс
            .pipe($.gp.autoprefixer({browsers: ['last 2 versions']}))// автопрефиксы
            .pipe($.gp.csso())// оптимизация / минификация
            .pipe($.gp.rename('style.min.css'))// переименовали готовый файл
            .pipe($.gulp.dest('build/css'))// выгрузили готовый файл в папку
            .pipe($.browserSync.stream());// перезагрузили браузер
    });
};