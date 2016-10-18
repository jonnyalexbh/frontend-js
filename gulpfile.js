// Dependence

var gulp = require('gulp')
var concat = require('gulp-concat')
var minifycss =require('gulp-minify-css');
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var gulpFilter = require('gulp-filter');

// Define paths variables
var dest_path =  'public';

// task example
gulp.task('hello', function() {
  console.log('Hola a todos');
});

// task 1 concatenate css tvify
gulp.task('tvify', function () {
  gulp.src(['resources/css/tvify.css'])
  .pipe(concat('tvify.css'))
  .pipe(gulp.dest(dest_path + '/css'))
});

// task 2 concatenate js tvify
gulp.task('tvify-js', function () {
  gulp.src(['resources/js/tvify.js'])
  .pipe(concat('tvify.js'))
  .pipe(gulp.dest(dest_path + '/js'))
});



// task 1 concatenate css
gulp.task('concat-css', function () {
  gulp.src('resources/css/*.css')
  .pipe(concat('application.css'))
  .pipe(gulp.dest(dest_path + '/css'))
});

// task 2 concatenate css and minify
gulp.task('minify-css', function () {
  gulp.src('resources/css/*.css')
  .pipe(concat('application.css'))
  .pipe(minifycss())
  .pipe(gulp.dest(dest_path + '/css'))
});




// task 3 log bower js
gulp.task('test', function () {
  var bowerFiles = mainBowerFiles('**/*.js');
  console.log('bower files: ', bowerFiles);
});

// task 4 log bower all
gulp.task('testall', function () {
  var bowerFiles = mainBowerFiles();
  console.log('bower files: ', bowerFiles);
});

// task 5 bower all files
gulp.task('bower', function() {
  return gulp.src(mainBowerFiles())
  .pipe(gulp.dest(dest_path + '/lib'))
});

// task 6 bower alone .js
gulp.task('bowerjs', function () {
  return gulp.src(mainBowerFiles('**/*.js'))
  .pipe(gulp.dest(dest_path + '/lib'))
});

// task 7 bower alone .js more concatenate and minify
gulp.task('bowerjsconcat', function () {
  return gulp.src(mainBowerFiles('**/*.js'))
  .pipe(concat('application.js'))
  .pipe(uglify())
  .pipe(gulp.dest(dest_path + '/lib'))
});

// task 8 bower library
gulp.task('bowerall', function () {

  var jsFilter = gulpFilter('**/*.js', {restore: true});
  var cssFilter = gulpFilter('**/*.less', {restore: true});
  return gulp.src(mainBowerFiles())

  .pipe(cssFilter)
  .pipe(gulp.dest(dest_path + '/lib'))
  .pipe(cssFilter.restore)

  .pipe(jsFilter)
  .pipe(gulp.dest(dest_path + '/lib'));

});

// task 9 bower library concatenate
gulp.task('bowerallconcat', function () {

  var jsFilter = gulpFilter('**/*.js', {restore: true});
  var cssFilter = gulpFilter('**/*.less', {restore: true});
  return gulp.src(mainBowerFiles())

  .pipe(cssFilter)
  .pipe(gulp.dest(dest_path + '/lib'))
  .pipe(cssFilter.restore)

  .pipe(jsFilter)
  .pipe(uglify())
  .pipe(gulp.dest(dest_path + '/lib'));

});
