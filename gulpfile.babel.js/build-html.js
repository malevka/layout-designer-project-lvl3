import gulp from "gulp";
import pug from "gulp-pug";

const paths = {
  buildSrc: ["app/pug/index.pug","app/pug/chat.pug"],
  watchSrc: "app/pug/",
  dest: "app/build/"
};

export const watchPugFiles = () => gulp.watch(paths.watchSrc, buildHtml);

export const buildHtml = () => {
  return gulp.src(paths.buildSrc)
    .pipe(pug({
      pretty: true
      // Your options in here.
    })).pipe(gulp.dest(paths.dest));
};