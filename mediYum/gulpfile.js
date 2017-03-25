var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var js_obfuscator = require('gulp-js-obfuscator');
var babel = require('gulp-babel');

var paths = {
  sass: ['./scss/*.scss']
};

var runSequence = require('run-sequence');

gulp.task('totalBuild', (callback) => {
    runSequence('sass', 'total', 'watch', callback);
});

gulp.task('default', ['sass']);

gulp.task('sass', (done) => {
  gulp.src('./scss/main.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./dist/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./dist/css/'))
    .on('end', done);
});

gulp.task('watch', () => {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], () => {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', (done) => {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('total', () => {
  gulp.src('./js/*.js')
    .pipe(babel({ presets: ['es2015'] })) 
    .pipe(ngAnnotate())
    .pipe(js_obfuscator({}, ["**/jquery-*.js"]))
    .pipe(ngAnnotate())
    .pipe(uglify().on('error', function (e) {
      console.log(e);
    }))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('dist/minjs/'));
});