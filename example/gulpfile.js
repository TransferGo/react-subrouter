var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var source     = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify   = require('watchify');
var babelify   = require('babelify');
var open       = require('open');

var b = watchify(browserify({
    cache: {},
    packageCache: {},
    fullPaths: true,
    entries: './src/index.js',
    debug: true
}));

b.transform(babelify.configure({
    ignore: "bower_components"
}));

b.on('update', bundle);

gulp.task('browserify', bundle);

function bundle() {
    console.log('Bundling...');
    return b
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public'))
        .pipe(livereload());
}

gulp.task('default', ['browserify'], function(){
    livereload.listen();
    require('./app.js');
    open('http://localhost:3000');
});