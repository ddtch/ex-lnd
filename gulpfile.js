var gulp = require('gulp'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass');
	autoPrefixer = require('gulp-autoprefixer');

var paths = {
	styles: './styles.scss'
}

gulp.task('styles', function(){
	return gulp.src(paths.styles)
		.pipe(sass())
		.pipe(autoPrefixer({
			browsers: ['last 4 versions']
		}))
		.pipe(gulp.dest('./'))
		.pipe(connect.reload());
});

gulp.task('server', function(){
	connect.server({
	    root: '',
	    livereload: true
	  });
});

gulp.task('watch', function(){
	gulp.watch(paths.styles, ['styles'])
});


gulp.task('default', ['server', 'watch'])
