const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass');

gulp.task('hello', () => {
    console.log('hey jawann')
})

gulp.task('sass', () => {
    return gulp.src('index.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
            })
        )
        .pipe(gulp.dest('dist'))
})

gulp.task('watch', function() {
    gulp.watch('*.scss', gulp.series('sass'));
  });