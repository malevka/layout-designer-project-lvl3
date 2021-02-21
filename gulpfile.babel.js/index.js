import { buildHtml, watchPugFiles } from "./build-html";
import { buildStyles, watchStylesFiles } from "./build-styles";
import svgSprite from "gulp-svg-sprite";
import gulp from "gulp";
import concat from "gulp-concat";

const watch = () => {
  watchPugFiles();
  watchStylesFiles();
};
const config = {
  mode: {
    symbol: {
      dest: "icons",
      sprite: "sprite.symbol.svg"
    }
  }
};

const scripts = () => {
  return gulp.src(["node_modules/jquery/dist/jquery.slim.min.js", "node_modules/popper.js/dist/umd/popper.min.js","node_modules/bootstrap/dist/js/bootstrap.min.js "])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build/js/'));
};

const buildSvgSprites = () => {
  return gulp.src("app/images/icons/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("build/images/"));
};

const build = () => gulp.parallel(buildHtml, buildStyles);

export { buildHtml, build, watch, buildStyles, buildSvgSprites , scripts};



