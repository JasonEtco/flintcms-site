const gulp = require('gulp');
const gulpIf = require('gulp-if');
const browserSync = require('browser-sync');
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
gulp.task('jekyll-build', (done) => {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], () => {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], () => {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', () => {
    return gulp.src('css/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(gulpIf(prod, prefix(browsers, { cascade: true })))
        .pipe(gulpIf(prod, cleanCSS()))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest('_site/css'));
});

gulp.task('js', () => {
    return gulp.src('_js/main.js')
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
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulpIf(prod, uglify()))
        .pipe(gulp.dest('js'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', () => {
    gulp.watch(['_sass/**/*.scss', 'css/*.scss'], ['sass']);
    gulp.watch('_js/**/*.js', ['js']);
    gulp.watch(['*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);

gulp.task('build', ['sass', 'js', 'jekyll-build']);

gulp.task('deploy', () => gulp.src('./_site/**/*').pipe(deploy()));

gulp.task('prod', ['build', 'deploy']);