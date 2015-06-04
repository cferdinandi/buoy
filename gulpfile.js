/**
 * Gulp Packages
 */

// General
var gulp = require('gulp');
var fs = require('fs');
var del = require('del');
var lazypipe = require('lazypipe');
var plumber = require('gulp-plumber');
var flatten = require('gulp-flatten');
var tap = require('gulp-tap');
var rename = require('gulp-rename');
var header = require('gulp-header');
var footer = require('gulp-footer');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var package = require('./package.json');

// Scripts and tests
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


/**
 * Paths to project folders
 */

var paths = {
	input: 'src/**/*',
	output: 'dist/',
	scripts: {
		input: 'src/js/*',
		output: 'dist/js/'
	}
};


/**
 * Template for banner to add to file headers
 */

var banner = {
	full :
		'/**\n' +
		' * <%= package.name %> v<%= package.version %>\n' +
		' * <%= package.description %>, by <%= package.author.name %>.\n' +
		' * <%= package.repository.url %>\n' +
		' * \n' +
		' * Free to use under the MIT License.\n' +
		' * http://gomakethings.com/mit/\n' +
		' */\n\n',
	min :
		'/**' +
		' <%= package.name %> v<%= package.version %>, by Chris Ferdinandi' +
		' | <%= package.repository.url %>' +
		' | Licensed under MIT: http://gomakethings.com/mit/' +
		' */\n'
};


/**
 * Gulp Taks
 */

// Lint, minify, and concatenate scripts
gulp.task('build:scripts', ['clean:dist'], function() {
	var jsTasks = lazypipe()
		.pipe(header, banner.full, { package : package })
		.pipe(gulp.dest, paths.scripts.output)
		.pipe(rename, { suffix: '.min' })
		.pipe(uglify)
		.pipe(header, banner.min, { package : package })
		.pipe(gulp.dest, paths.scripts.output);

	return gulp.src(paths.scripts.input)
		.pipe(plumber())
		.pipe(tap(function (file, t) {
			if ( file.isDirectory() ) {
				var name = file.relative + '.js';
				return gulp.src(file.path + '/*.js')
					.pipe(concat(name))
					.pipe(jsTasks());
			}
		}))
		.pipe(jsTasks());
});

// Lint scripts
gulp.task('lint:scripts', function () {
	return gulp.src(paths.scripts.input)
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

// Remove prexisting content from output and test folders
gulp.task('clean:dist', function () {
	del.sync([
		paths.output
	]);
});

// Spin up livereload server and listen for file changes
gulp.task('listen', function () {
	livereload.listen();
	gulp.watch(paths.input).on('change', function(file) {
		gulp.start('default');
		gulp.start('refresh');
	});
});

// Run livereload after file change
gulp.task('refresh', ['compile', 'docs'], function () {
	livereload.changed();
});


/**
 * Task Runners
 */

// Compile files (default)
gulp.task('default', [
	'lint:scripts',
	'clean:dist',
	'build:scripts'
]);

// Compile files when something changes
gulp.task('watch', [
	'listen',
	'default'
]);