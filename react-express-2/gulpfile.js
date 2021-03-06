var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream')
var livereload = require('gulp-livereload')
var reload = browserSync.reload;
var gutil = require('gulp-util'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

var paths = {
    ALL: ['app/*.js', 'app/**/*.js', 'src/index.html'],
    JS: ['app/*.js', 'app/**/*.js'],
    OUT: 'build.js',
    DEST_BUILD: '.tmp/app.js',
    DEST: '.tmp',
    ENTRY_POINT: __dirname + 'app/main.jsx',
    "js": "./app/**/*.js",
    "jsx": "./app/**/*.jsx"
};

var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }

var server;

gulp.task('live-server', function() {
  exec("pkill 'node'", puts);
  server = new LiveServer('server/main.js');
  server.start();
})

gulp.task('stop-server', function() {
  server.stop()
  setTimeout(function() { console.log('stopping server') }, 1000)
})
// gulp dependent on copy which takes files elsewhere
gulp.task('bundle', ['copy', 'sass'], function() {
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
  gulp.src(["app/*.css", 'node_modules/toastr/build/toastr.css'])
  .pipe(gulp.dest('./.tmp'));
})

gulp.task('sass', function () {
  console.log('sassing')
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./.tmp'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('serve', ['bundle', 'live-server'], function() {
  gulp.watch(['./server/**/*.js'], ['bundle',  'stop-server', 'live-server', browserSync.reload])
  gulp.watch([paths.js, paths.jsx], ['bundle', browserSync.reload])
  gulp.watch('./sass/**/*.scss', ['bundle', browserSync.reload])
})

gulp.task('default', ['serve'])