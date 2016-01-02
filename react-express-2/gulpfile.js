var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream')

gulp.task('live-server', function() {
  var server = new LiveServer('server/main.js');
  server.start();
})
// gulp dependent on copy which takes files elsewhere
gulp.task('bundle', ['copy'], function() {
  return browserify({
    entries: 'app/main.jsx',
    extensions: ['.jsx'],
    debug: true,

  })
  .transform('babelify', {presets: ['es2015', 'react']})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./.tmp'))
})

gulp.task('copy', function() {
  gulp.src(["app/*.css"])
  .pipe(gulp.dest('./.tmp'));
})

gulp.task('watch', function() {
  gulp.watch('./app/**/*.js', ['js'])

})

gulp.task('serve', ['bundle', 'live-server', 'watch'], function() {
  browserSync.init(null, {
    proxy: 'http://localhost:7777',
    port: 9001
  })
})

gulp.task('default', ['serve'])