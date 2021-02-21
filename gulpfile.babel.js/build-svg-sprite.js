import gulp from "gulp";
import svgSprite from "gulp-svg-sprite";

const paths = {
  src: ["app/images/icons/*.svg"],
  dest: "build/images/"
};

const config = {
  mode: {
    symbol: {
      dest: "icons",
      sprite: "sprite.symbol.svg"
    }
  }
};

export const buildSvgSprites = () => {
  return gulp.src(paths.src)
    .pipe(svgSprite(config))
    .pipe(gulp.dest(paths.dest));
};