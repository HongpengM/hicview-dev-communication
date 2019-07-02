var gulp = require('gulp'),
browserify = require('browserify'),
babelify = require('babelify'),
source = require('vinyl-source-stream'),
buffer = require('vinyl-buffer')


gulp.task('default', function(){
  return browserify(
    {entries: ['./index.js']}
  ) .transform(babelify, {
      presets:['@babel/preset-env'],
    plugins:[
      '@babel/plugin-transform-runtime'
      //'regenerator-transform'
    ]
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist'))
  
})
