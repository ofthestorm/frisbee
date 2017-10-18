var gulp = require('gulp'),
    less = require('gulp-less'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');

gulp.task('generate', function () {
    gulp.src('css/style.less')
        //异常
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        //.pipe(cssmin())//压缩
        .pipe(gulp.dest('css'));
});

//监听
gulp.task('watch', function () {
    gulp.watch('css/*.less', ['generate']); //当所有less文件发生改变时，调用testLess任务
});