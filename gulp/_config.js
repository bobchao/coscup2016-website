module.exports = {
	html: {
		src: ['app/*.html'],
		dst: 'build/',
		watch: ['app/*.html', 'app/html/**/*']
	},
	js: {
		src: 'app/js/*.js',
		dst: 'build/js',
		watch: ['app/js/*.js','app/js/**/*'],
		include_paths: [
			'app/js',
			__dirname + '/../node_modules'
		]
	},
	scss: {
		src: 'app/scss/*.scss',
		dst: 'build/css',
		watch: [
			'app/scss/*.scss',
			'app/scss/**/*'
		]
	},
	image: {
		src: 'app/images/**/*',
		dst: 'build/images/'
	},
	favicon: {
		src: 'app/favicon*',
		dst: 'build/'
	}
};
