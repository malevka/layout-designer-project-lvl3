import { buildHtml, watchPugFiles } from "./build-html";
import { buildStyles, watchStylesFiles } from "./build-styles";
import gulp from "gulp";

const watch = () => {
  watchPugFiles();
  watchStylesFiles();
}

const build = () => gulp.parallel(buildHtml, buildStyles);

export { buildHtml, build, watch, buildStyles};



