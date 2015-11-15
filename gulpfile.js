var gulp = require('gulp');
var react = require('gulp-react');
var rename = require('gulp-rename');
var del = require('del');
var runSequence = require('run-sequence');
var watching = false;
var webpackConfig = require('./webpack.config');
var webpack = require('webpack');
var gutil = require('gulp-util');

var path = {
    CSS: ['src/css/*.css', 'src/css/**/*.css'],
    IMG: ['src/img/*.svg'],
    HTML: 'src/todo.html',
    JSON: 'src/manifest.json',
    DEST: 'build',
    DEST_IMG: 'build/img',
    DEST_STYLES: 'build/css'
};

gulp.task('clean', function(callback) {
    del(path.DEST + '/**/*.*', function() {
        del(path.DEST, callback);
    });
});

gulp.task('js', function(callback) {
    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString());
        callback();
    });
});

gulp.task('css', function() {
    return gulp.src(path.CSS)
        .pipe(gulp.dest(path.DEST_STYLES));
});

gulp.task('html', function() {
     return gulp.src(path.HTML)
         .pipe(gulp.dest(path.DEST));
});

gulp.task('manifest', function() {
    return gulp.src(path.JSON)
        .pipe(gulp.dest(path.DEST));
});

gulp.task('img', function() {
    return gulp.src(path.IMG)
        .pipe(gulp.dest(path.DEST_IMG));
});

gulp.task('assemble', ['js', 'img', 'css', 'html', 'manifest']);

gulp.task('build', function(callback) {
    runSequence('clean', 'assemble', callback);
});
