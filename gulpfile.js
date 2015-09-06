var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var del = require('del');
var runSequence = require('run-sequence');
var watching = false;

var path = {
    JS: ['src/js/*.js', 'src/js/**/*.js'],
    CSS: ['src/css/*.css', 'src/css/**/*.css'],
    IMG: ['src/img/*.svg'],
    HTML: 'src/todo.html',
    JSON: 'src/manifest.json',
    DEST: 'build',
    DEST_JS: 'build/js',
    DEST_IMG: 'build/img',
    DEST_STYLES: 'build/css',
    BROWSERIFY_JS: 'build/js/main.js'
};

gulp.task('clean', function(callback) {
    del(path.DEST + '/**/*.*', function() {
        del(path.DEST, callback);
    });
});

gulp.task('browserify', ['js'], function(callback) {
    return gulp.src(path.BROWSERIFY_JS)
        .pipe(browserify({
            insertGlobals : true
        }))
        .on('error', function(err) {
            console.log(err);
            if (!watching) {
                callback(err);
            }
        })
        .pipe(rename('app.js'))
        .pipe(gulp.dest(path.DEST_JS))

});

gulp.task('js', function(callback) {
    return gulp.src(path.JS)
        .pipe(react())
        .on('error', function(err) {
            console.log(err);
            if (!watching) {
                callback(err);
            }
        })
        .pipe(gulp.dest(path.DEST_JS))
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

gulp.task('assemble', ['js', 'browserify', 'img', 'css', 'html', 'manifest']);

gulp.task('build', function(callback) {
    runSequence('clean', 'assemble', callback);
});

gulp.task('watch', function(){
    watching = true;
    gulp.watch(path.JS.concat(path.CSS, path.IMG, path.HTML), ['assemble']);
});