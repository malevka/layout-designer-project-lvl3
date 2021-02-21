import gulp from "gulp";
import sass from "gulp-sass";
import nodeSass from "node-sass";

sass.compiler = nodeSass;

const paths = {
  buildSrc: "app/scss/style.scss",
  watchSrc: "app/scss/",
  dest: "build/css"
};

export const watchStylesFiles = () => gulp.watch(paths.watchSrc, buildStyles);

export const buildStyles = () => {
  return gulp.src(paths.buildSrc)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(paths.dest));
};