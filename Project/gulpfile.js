global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    del: require('del'),
    imageMinJpegRecompress: require('imagemin-jpeg-recompress'),
    pngquant: require('imagemin-pngquant'),
    path: {
        config: require('./gulp/config'),
        jquery: './js/jquery.js',
        js: './js/**/*'
    },
   // chosen: require('chosen-js')
};
$.path.config.forEach(function (path) {
    require(path)();
});