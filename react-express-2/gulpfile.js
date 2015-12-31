var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');

gulp.task('build', function () {
    return browserify({entries: './src/app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('*.jsx', ['build']);
});

gulp.task('live-server', function() {
  var server = new LiveServer('server/main.js');
  server.start();
})

gulp.task('serve', ['build', 'live-server'], function() {
  browserSync.init(null, {
    proxy: 'http://localhost:7777',
    port: 9001
  })
})

gulp.task('default', ['serve']);


