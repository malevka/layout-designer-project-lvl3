import gulp from "gulp";
import concat from "gulp-concat";

const paths = {
  src: ["node_modules/jquery/dist/jquery.slim.min.js", "node_modules/popper.js/dist/umd/popper.min.js", "node_modules/bootstrap/dist/js/bootstrap.min.js "],
  dest: "build/js"
};

const fileName = "all.js";

export const buildScripts = () => {
  return gulp.src(paths.src)
    .pipe(concat(fileName))
    .pipe(gulp.dest(paths.dest));
};