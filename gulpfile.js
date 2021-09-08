const { src, dest, series, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const htmlmin = require('gulp-htmlmin')
const minify = require('gulp-minify')
const uglify = require('gulp-uglify-es').default
const include = require('gulp-file-include')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const sync = require('browser-sync').create()

function html() {
	return src('app/**.html')
		.pipe(include({
			prefix: '@@'
		}))
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(dest('dist'))
}

function scss() {
	return src('app/main.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions']
		}))
		.pipe(csso())
		.pipe(concat('style.css'))
		.pipe(dest('dist'))
}

function jsmin() {
	return src('app/js/**.js')
		.pipe(uglify())
		.pipe(dest('dist'))
}

function img() {
	return src(['app/assets/*', 'app/assets/*!fonts'])
		.pipe(dest('dist/assets'))
}

function clear() {
	return del('dist')
}

function serve() {
	sync.init({
		server: './dist'
	})
	watch('app/**.html', series(html)).on('change', sync.reload)
	watch('app/**.scss', series(scss)).on('change', sync.reload)
	watch('app/html/**.html', series(html)).on('change', sync.reload)
	watch('app/scss/**.scss', series(scss)).on('change', sync.reload)
	watch('app/js/**.js', series(jsmin)).on('change', sync.reload)
}

exports.build = series(clear, scss, html, jsmin, img)
exports.start = series(clear, img, scss, html, jsmin, serve)
exports.clear = clear
exports.html = jsmin