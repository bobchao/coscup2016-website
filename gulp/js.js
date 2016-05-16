var errorLog = require('./_errorLog.js').errorLog;
var jsPath   = require('./_config.js').js;

var gulp       = require('gulp');
var uglify     = require('gulp-uglify');
var browserify = require('gulp-browserify');
var reactify   = require('reactify');

gulp.task('js', function(){

	process.env.NODE_ENV = 'production';
	
	return gulp.src(jsPath.src)
		.pipe(browserify({
			transform: ['reactify'],
			paths: jsPath.include_paths
		}))
		.on('error', errorLog)
		.pipe(uglify())
		.pipe(gulp.dest(jsPath.dst));
});

gulp.task('js-debug', function(){
	return gulp.src(jsPath.src)
		.pipe(browserify({
			transform: ['reactify'],
			debug: true,
			paths: jsPath.include_paths
		}))
		.on('error', errorLog)
		.pipe(gulp.dest(jsPath.dst));
});
