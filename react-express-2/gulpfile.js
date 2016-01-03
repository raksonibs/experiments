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
    gulp.watch(paths.JS, ['js']);

    var watcher = watchify(browserify({
        entries: paths.ENTRY_POINT,
        transform: [babelify],
        debug: true,
        cache: {},
        packageCache: {}
    }));

    watcher.on('update', function(){
            watcher.bundle()
            .on('error', gutil.log)
            .pipe(source(paths.OUT))
            .pipe(gulp.dest(paths.DEST_BUILD))
            .pipe(browserSync.reload({stream: true}));

        console.log('Updated');
    })
        .bundle()
        .pipe(source(paths.OUT))
        .pipe(gulp.dest(paths.DEST_BUILD));

    browserSync.init({
        server: {
            baseDir: paths.DEST
        }
    });
});

// .task('serve', ['bower', 'clean', 'lint', 'less', 'js', 'server'], function() {
//   return gulp.watch([
//     package.paths.js, package.paths.jsx, package.paths.html, package.paths.less
//   ], [
//    'lint', 'less', 'js', browserSync.reload
//   ]);
// })

gulp.task('serve', ['bundle', 'live-server'], function() {
  return gulp.watch([paths.js, paths.jsx], ['bundle', browserSync.reload])
})

gulp.task('default', ['serve'])