//Initialize module
const {src, dest, watch, series} =  require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
 
//Sass task
function scssTask() {
    return src('app/scss/style.scss', {sourcemaps: true})
    .pipe(sass({
    // Tell Sass to look in these directories for imported files
    includePaths: [
        './app/scss/globals',
        './app/scss/components',
        './app/scss/util'
    ]
}).on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('dist', {sourcemaps: '.'}));
}

//Js task
function jsTask() {
    return src('app/js/script.js', {sourcemaps: true})
    .pipe(babel({presets: ['@babel/preset-env']}))
    .pipe(terser())
    .pipe(dest('dist', {sourcemaps: '.'}));
}

//Browsersync
function browserSyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: '.',
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0',
            },
        },
    });
    cb();
} 
function browserSyncReload(cb) {
    browsersync.reload();
    cb();
}

//Watch task
function watchTask() {
    watch('*html', browserSyncReload);
    watch(
        ['app/scss/**/*.scss', 'app/**/*.js'],
        series(scssTask, jsTask, browserSyncReload)
    );
}

//Default gulp task
exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);