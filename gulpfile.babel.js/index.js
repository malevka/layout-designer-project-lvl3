import { buildHtml, watchPugFiles } from "./build-html";
import { buildStyles, watchStylesFiles } from "./build-styles";
import { buildSvgSprites } from "./build-svg-sprite";
import { buildScripts } from "./build-scripts";
import gulp from "gulp";

const watch = () => {
  watchPugFiles();
  watchStylesFiles();
};

const build = gulp.parallel(buildSvgSprites, buildScripts, buildHtml, buildStyles);

export { buildHtml, build, watch, buildStyles, buildSvgSprites , buildScripts};



