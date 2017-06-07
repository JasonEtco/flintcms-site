const gulp = require('gulp');
const gulpIf = require('gulp-if');
const browser = require('browser-sync');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const prefix = require('gulp-autoprefixer');
const deploy = require('gulp-gh-pages')
const cleanCSS = require('gulp-clean-css');
const cp = require('child_process');
const babel = require('gulp-babel');
const browsers = ['last 15 versions', '> 1%', 'ie 8', 'ie 7'];

const prod = process.argv[2] === 'prod' || process.argv[2] === 'build';

const jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
const messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
function buildJekyll(done) {
    browser.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
};

function browsersync(done) {
    browser.init({ server: { baseDir: '_site' } }, done());
}

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
function buildSass(done) {
    gulp.src('_sass/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browser.notify
        }))
        .pipe(gulp.dest('_site/css'))
        .pipe(gulpIf(prod, prefix(browsers, { cascade: true })))
        .pipe(gulpIf(prod, cleanCSS()))
        .pipe(browser.reload({ stream: true }))
        .pipe(gulp.dest('_site/css'));
    done();
};

function buildJS(done) {
     gulp.src('_js/main.js')
        .pipe(babel({
            presets: [['env', {
              targets: { browsers },
              debug: false,
              loose: true,
              modules: false,
              useBuiltIns: true,
            }]]
        }))
        .pipe(gulp.dest('_site/js'))
        .pipe(browser.reload({ stream: true }))
        .pipe(gulpIf(prod, uglify()))
        .pipe(gulp.dest('_site/js'));
    done();
};


gulp.task('build', gulp.series(buildJekyll, gulp.parallel(buildSass, buildJS)));

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
function watch(done) {
    gulp.watch(['_sass/**/*.scss', 'css/*.scss'], buildSass);
    gulp.watch('_js/**/*.js', buildJS);
    gulp.watch(['**/*.html', '*.html', '_posts/**/*', '_includes/*', '!_site/**/*'], gulp.series('build'));
    done();
};

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */

gulp.task('default', gulp.series('build', browsersync, watch));
gulp.task('deploy', () => gulp.src('./_site/**/*').pipe(deploy()));
gulp.task('prod', gulp.series('build', 'deploy'));