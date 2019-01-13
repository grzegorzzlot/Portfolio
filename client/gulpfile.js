var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var sassFiles = 'src/assets/styles/sass/**/*.scss',
    cssDest = 'src/assets/styles/css/';

gulp.task('sass', function(){
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
        return new Promise(function(resolve, reject) {
            console.log("HTTP Server Started");
            resolve();
          });
});
gulp.task('sass:watch', function () {
    gulp.watch(sassFiles, gulp.series('sass'));
});