var gulp = require('gulp');
var sass = require('gulp-sass');
var copy = require('gulp-contrib-copy');
var rename = require('gulp-rename');
var	clean = require('gulp-clean');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync.init(
    	[
    		"./src/css/*.css", 
    		"./src/scripts/*.js", 
    		"./src/*.html",
    		"./src/image/*"
		], {
        server: {
            baseDir: "./src"
        }
    });
});

gulp.task('sass-dev', function(){
	gulp.src('src/css/sass/style.scss')
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(rename("style.min.css"))
	.pipe(gulp.dest('src/css'))
	.pipe(reload({ stream:true }))
});

gulp.task('autoprefixer', () =>
    gulp.src('src/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }).on('error', autoprefixer.logError)
        .pipe(gulp.dest('dist'))
));


gulp.task('copy', function(){
	gulp.src('src/index.html')
	.pipe(copy())
	.pipe(gulp.dest('deploy/'))
});
gulp.task('copy-image', function(){
	gulp.src(['src/image/**/*.png', 'src/image/**/*.jpg'])
	.pipe(copy())
	.pipe(gulp.dest('deploy/image'))
});

gulp.task('clean', function(){
	gulp.src('deploy/')
	.pipe(clean())
});

//para build //
gulp.task('minify-css', function(){
  return gulp.src('./src/css/style.min.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('deploy/css'));
});


gulp.task ('minify', function(){
    return gulp.src('deploy/*.html')
    .pipe(htmlmin ({collapseWhitespace:true}))
    .pipe(gulp.dest( 'deploy/' ));
});

gulp.task('default', ['clean', 'sass-dev', 'browser-sync'], function(){	
    gulp.watch(["./src/css/sass/**/*.scss", "./src/css/sass/*/*.scss" ], ['sass-dev'])
})

 gulp.task('work',['clean','default'])
 gulp.task('build', [ 'sass-dev', 'copy', 'copy-image', 'minify', 'minify-css'])