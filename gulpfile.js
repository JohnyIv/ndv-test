let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let pug = require('gulp-pug');
let sass = require('gulp-sass');
let plumber = require('gulp-plumber');
let sourcemaps = require('gulp-sourcemaps');
let autopref = require('gulp-autoprefixer');
// let notify = require('gulp-notify');
sass.compiler = require('node-sass');



let paths = {
    // pug: {
    //     watch: 'src/**/*.pug',
    //     src: 'src/index.pug',
    //     dist: 'dist/'
    // },
    sass: {
        watch: 'src/**/*.sass',
        src: 'src/style.sass',
        dist: 'dist/css/'
    },
    script: {
        src: 'src/js/**/*.js',
        dist: 'dist/js/'
    },
    serve: {
        html: 'dist/index.html',
        css: 'dist/css/style.css',
        js: 'dist/js/script.js'
    }
}

gulp.task('serve', function(done) {
    browserSync.init({
        server: './dist'
    });


    browserSync.watch(paths.serve.html).on('change', browserSync.reload);
    browserSync.watch(paths.serve.css).on('change', browserSync.reload);
    browserSync.watch(paths.serve.js).on('change', browserSync.reload);
    done();
});

// gulp.task('pug', function(done){
//     gulp.src(paths.pug.src)
//         .pipe(plumber())
//         .pipe(pug({
//             pretty: true
//         }))
//         .pipe(gulp.dest(paths.pug.dist))
//     done();
// });

gulp.task('sass', function(done){
     gulp.src(paths.sass.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error',sass.logError))
        .pipe(autopref())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.sass.dist))
     done();
});
gulp.task('watch',function(done){
    // gulp.watch(paths.pug.watch, gulp.series('pug'));
    gulp.watch(paths.sass.watch, gulp.series('sass'));
    // gulp.watch(paths.script.src, browserSync.reload);
    done();
});
gulp.task('default', gulp.series(
    // 'pug',
    'sass','serve','watch'));
